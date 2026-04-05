import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from '../drizzle/schema';

let db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (db) return db;

  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'ndw_marketing',
  });

  db = drizzle(connection, { schema });
  return db;
}

export async function queryUsers() {
  const database = await getDb();
  return database.query.users.findMany();
}

export async function queryUserByEmail(email: string) {
  const database = await getDb();
  return database.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });
}

export async function createUser(data: {
  email: string;
  name?: string;
  stripeCustomerId?: string;
}) {
  const database = await getDb();
  const result = await database.insert(schema.users).values(data);
  return result;
}

export async function querySubscriptionsByUserId(userId: number) {
  const database = await getDb();
  return database.query.subscriptions.findMany({
    where: (subscriptions, { eq }) => eq(subscriptions.userId, userId),
  });
}

export async function createSubscription(data: {
  userId: number;
  stripeSubscriptionId: string;
  pricingTier: 'business_start' | 'business_advanced' | 'business_scale';
  status: 'active' | 'canceled' | 'past_due';
  currentPeriodStart?: Date;
  currentPeriodEnd?: Date;
}) {
  const database = await getDb();
  return database.insert(schema.subscriptions).values(data);
}

export async function updateSubscriptionStatus(
  stripeSubscriptionId: string,
  status: 'active' | 'canceled' | 'past_due'
) {
  const database = await getDb();
  return database
    .update(schema.subscriptions)
    .set({ status })
    .where(
      (subscriptions) =>
        subscriptions.stripeSubscriptionId === stripeSubscriptionId
    );
}
