import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

import * as schema from './schema'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set')
}

// Always use Neon client since we have a Neon database URL
export const db = drizzleNeon({
  client: neon(databaseUrl),
  schema,
  casing: 'snake_case',
})
