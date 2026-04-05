import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import Stripe from 'stripe';
import * as db from './db';
import type { PricingTier } from '../shared/types';

const t = initTRPC.create();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16' as any,
});

const pricingPlans = {
  business_start: {
    monthlyPrice: 35000, // $350 in cents
    setupFee: 5000, // $50 in cents
    name: 'Business Start',
  },
  business_advanced: {
    monthlyPrice: 60000, // $600 in cents
    setupFee: 5000, // $50 in cents
    name: 'Business Advanced',
  },
  business_scale: {
    monthlyPrice: 120000, // $1,200 in cents
    setupFee: 5000, // $50 in cents
    name: 'Business Scale',
  },
};

export const appRouter = t.router({
  stripe: t.router({
    createCheckoutSession: t.procedure
      .input(
        z.object({
          pricingTier: z.enum([
            'business_start',
            'business_advanced',
            'business_scale',
          ]),
          email: z.string().email().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { pricingTier, email } = input;
        const plan = pricingPlans[pricingTier as PricingTier];

        if (!plan) {
          throw new Error('Invalid pricing tier');
        }

        try {
          // Create or retrieve customer
          let customerId: string;

          if (email) {
            const existingCustomer = await stripe.customers.list({
              email,
              limit: 1,
            });

            if (existingCustomer.data.length > 0) {
              customerId = existingCustomer.data[0].id;
            } else {
              const customer = await stripe.customers.create({
                email,
              });
              customerId = customer.id;
            }
          } else {
            const customer = await stripe.customers.create({});
            customerId = customer.id;
          }

          // Create checkout session
          const session = await stripe.checkout.sessions.create({
            customer: customerId,
            payment_method_types: ['card'],
            mode: 'subscription',
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: plan.name,
                    description: `Monthly subscription for ${plan.name}`,
                  },
                  unit_amount: plan.monthlyPrice,
                  recurring: {
                    interval: 'month',
                    interval_count: 1,
                  },
                },
                quantity: 1,
              },
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'Setup Fee',
                    description: 'One-time setup fee',
                  },
                  unit_amount: plan.setupFee,
                },
                quantity: 1,
              },
            ],
            success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pricing`,
            metadata: {
              pricingTier,
              email: email || 'guest',
            },
          });

          return {
            sessionId: session.id,
            url: session.url,
          };
        } catch (error) {
          console.error('Stripe checkout error:', error);
          throw new Error('Failed to create checkout session');
        }
      }),

    getCheckoutSession: t.procedure
      .input(z.object({ sessionId: z.string() }))
      .query(async ({ input }) => {
        try {
          const session = await stripe.checkout.sessions.retrieve(
            input.sessionId
          );
          return {
            id: session.id,
            status: session.payment_status,
            customer: session.customer,
            metadata: session.metadata,
          };
        } catch (error) {
          console.error('Stripe session retrieval error:', error);
          throw new Error('Failed to retrieve session');
        }
      }),
  }),

  health: t.procedure.query(() => {
    return { status: 'ok' };
  }),
});

export type AppRouter = typeof appRouter;
