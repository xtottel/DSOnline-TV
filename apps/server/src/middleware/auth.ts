// src/middleware/auth.ts
import { createMiddleware } from 'hono/factory'
import { verifySupabaseToken } from '../supabase'
import { prisma } from '../db'

export const authMiddleware = createMiddleware(async (c, next) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '')
  
  if (!token) {
    return c.json({ error: 'Authentication required' }, 401)
  }

  const user = await verifySupabaseToken(token)
  
  if (!user) {
    return c.json({ error: 'Invalid token' }, 401)
  }

  // Get user from database
  const dbUser = await prisma.user.findUnique({
    where: { email: user.email! }
  })

  if (!dbUser) {
    return c.json({ error: 'User not found in database' }, 404)
  }

  c.set('user', dbUser)
  await next()
})