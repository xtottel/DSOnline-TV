// src/index.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'
import routes from './routes' // Import the main router

const app = new Hono()

// Middleware
app.use('*', cors())
app.use('*', async (c, next) => {
  console.log(`${c.req.method} ${c.req.url}`)
  await next()
})

//Initialize Supabase
import { Initialize as InitializeSupabase } from './supabase'
await InitializeSupabase()

// Health check
app.get('/', (c) => {
  return c.json({ 
    message: 'Media Dashboard API', 
    timestamp: new Date().toISOString() 
  })
})

// Mount all routes under /api
app.route('/api', routes)

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Route not found' }, 404)
})

// Error handler
app.onError((err, c) => {
  console.error('Server error:', err)
  return c.json({ error: 'Internal server error' }, 500)
})

// Start server
const port = parseInt(process.env.PORT || '5000')
console.log(`Server running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})