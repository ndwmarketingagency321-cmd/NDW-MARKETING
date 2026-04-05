import {
  mysqlTable,
  int,
  text,
  varchar,
  timestamp,
  boolean,
  decimal,
  index,
} from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';

export const users = mysqlTable(
  'users',
  {
    id: int('id').primaryKey().autoincrement(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    name: varchar('name', { length: 255 }),
    role: varchar('role', { length: 50 }).default('user'),
    stripeCustomerId: varchar('stripe_customer_id', { length: 255 }),
    stripeSubscriptionId: varchar('stripe_subscription_id', { length: 255 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull().onUpdateNow(),
  },
  (table) => ({
    emailIdx: index('email_idx').on(table.email),
    stripeCustomerIdx: index('stripe_customer_idx').on(table.stripeCustomerId),
  })
);

export const subscriptions = mysqlTable(
  'subscriptions',
  {
    id: int('id').primaryKey().autoincrement(),
    userId: int('user_id').notNull(),
    stripeSubscriptionId: varchar('stripe_subscription_id', {
      length: 255,
    }).notNull().unique(),
    pricingTier: varchar('pricing_tier', {
      length: 50,
      enum: ['business_start', 'business_advanced', 'business_scale'],
    }).notNull(),
    status: varchar('status', {
      length: 50,
      enum: ['active', 'canceled', 'past_due'],
    }).notNull(),
    currentPeriodStart: timestamp('current_period_start'),
    currentPeriodEnd: timestamp('current_period_end'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull().onUpdateNow(),
  },
  (table) => ({
    userIdx: index('user_idx').on(table.userId),
    stripeSubscriptionIdx: index('stripe_subscription_idx').on(
      table.stripeSubscriptionId
    ),
  })
);

export const usersRelations = relations(users, ({ many }) => ({
  subscriptions: many(subscriptions),
}));

export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({
  user: one(users, {
    fields: [subscriptions.userId],
    references: [users.id],
  }),
}));
