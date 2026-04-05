import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from '../drizzle/schema';
import { eq } from 'drizzle-orm';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export const db = drizzle(pool, { schema });

export async function queryUsers() {
  return db.query.users.findMany();
}

export async function queryUserByEmail(email: string) {
  return db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });
}

export async function createUser(data: {
  email: string;
  name?: string;
  stripeCustomerId?: string;
}) {
  return db.insert(schema.users).values(data).returning();
}

export async function querySubscriptionsByUserId(userId: number) {
  return db.query.subscriptions.findMany({
    where: (subscriptions, { eq }) => eq(subscriptions.userId, userId),
  });
}

export async function createSubscription(data: {
  userId: number;
  stripeSubscriptionId: string;
  pricingTier: string;
  status: string;
  currentPeriodStart?: Date;
  currentPeriodEnd?: Date;
}) {
  return db.insert(schema.subscriptions).values(data).returning();
}

export async function updateSubscriptionStatus(
  stripeSubscriptionId: string,
  status: string
) {
  return db
    .update(schema.subscriptions)
    .set({ status })
    .where(eq(schema.subscriptions.stripeSubscriptionId, stripeSubscriptionId));
}
