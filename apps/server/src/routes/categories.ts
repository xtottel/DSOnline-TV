// src/routes/categories.ts
import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { prisma } from '../db'
import { createCategorySchema, updateCategorySchema } from '../schemas'
import { authMiddleware } from '../middleware/auth'

export const categoriesRouter = new Hono()

categoriesRouter.use('*', authMiddleware)

// Get all categories
categoriesRouter.get('/', async (c) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: {
            posts: true
          }
        }
      },
      orderBy: { name: 'asc' }
    })
    
    return c.json({ categories })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Get single category
categoriesRouter.get('/:id', async (c) => {
  const id = c.req.param('id')
  
  try {
    const category = await prisma.category.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            posts: true
          }
        }
      }
    })
    
    if (!category) {
      return c.json({ error: 'Category not found' }, 404)
    }
    
    return c.json({ category })
  } catch (error) {
    console.error('Error fetching category:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Create category
categoriesRouter.post('/', zValidator('json', createCategorySchema), async (c) => {
  const data = c.req.valid('json')
  const user = c.get('user')
  
  // Only admins can create categories
  if (user.role !== 'ADMIN') {
    return c.json({ error: 'Unauthorized' }, 403)
  }
  
  try {
    const category = await prisma.category.create({
      data
    })
    
    return c.json({ category }, 201)
  } catch (error) {
    console.error('Error creating category:', error)
    
    // Handle unique constraint violations
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return c.json({ error: 'Category with this name or slug already exists' }, 400)
    }
    
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Update category
categoriesRouter.put('/:id', zValidator('json', updateCategorySchema), async (c) => {
  const id = c.req.param('id')
  const data = c.req.valid('json')
  const user = c.get('user')
  
  // Only admins can update categories
  if (user.role !== 'ADMIN') {
    return c.json({ error: 'Unauthorized' }, 403)
  }
  
  try {
    const category = await prisma.category.update({
      where: { id },
      data
    })
    
    return c.json({ category })
  } catch (error) {
    console.error('Error updating category:', error)
    
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return c.json({ error: 'Category with this name or slug already exists' }, 400)
    }
    
    if (error instanceof Error && error.message.includes('Record to update not found')) {
      return c.json({ error: 'Category not found' }, 404)
    }
    
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Delete category
categoriesRouter.delete('/:id', async (c) => {
  const id = c.req.param('id')
  const user = c.get('user')
  
  // Only admins can delete categories
  if (user.role !== 'ADMIN') {
    return c.json({ error: 'Unauthorized' }, 403)
  }
  
  try {
    await prisma.category.delete({
      where: { id }
    })
    
    return c.json({ message: 'Category deleted successfully' })
  } catch (error) {
    console.error('Error deleting category:', error)
    
    if (error instanceof Error && error.message.includes('Record to delete does not exist')) {
      return c.json({ error: 'Category not found' }, 404)
    }
    
    return c.json({ error: 'Internal server error' }, 500)
  }
})