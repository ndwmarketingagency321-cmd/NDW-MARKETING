export type PricingTier = 'business_start' | 'business_advanced' | 'business_scale';

export interface PricingPlan {
  id: PricingTier;
  name: string;
  monthlyPrice: number;
  setupFee: number;
  features: string[];
  description: string;
}

export interface User {
  id: number;
  email: string;
  name: string | null;
  role: 'user' | 'admin';
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: number;
  userId: number;
  stripeSubscriptionId: string;
  pricingTier: PricingTier;
  status: 'active' | 'canceled' | 'past_due';
  currentPeriodStart: Date | null;
  currentPeriodEnd: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CheckoutSessionInput {
  pricingTier: PricingTier;
  email?: string;
}

export interface CheckoutSessionResponse {
  sessionId: string;
  url: string;
}
