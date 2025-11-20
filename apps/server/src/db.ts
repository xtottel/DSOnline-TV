// src/db.ts
import { PrismaClient } from '@prisma/client'
import config from '../prisma.config'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const dbUrl = config.datasource?.url ?? process.env.DATABASE_URL ?? ''

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  datasources: {
    db: {
      url: dbUrl,
    },
  },
})

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}