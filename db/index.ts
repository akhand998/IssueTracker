import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from './schema'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set')
}

// Create the postgres client for Supabase
const client = postgres(databaseUrl)

// Always use postgres client since we have a Supabase database URL
export const db = drizzle(client, {
  schema,
  casing: 'snake_case',
})
