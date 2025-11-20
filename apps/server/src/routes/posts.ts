// src/routes/posts.ts
import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { prisma } from '../db'
import { createPostSchema, updatePostSchema } from '../schemas'
import { authMiddleware } from '../middleware/auth'

export const postsRouter = new Hono()

// Apply auth middleware to all routes
postsRouter.use('*', authMiddleware)

// Get all posts
postsRouter.get('/', async (c) => {
  try {
    const { search, status, page = '1', limit = '10' } = c.req.query()
    
    const skip = (parseInt(page) - 1) * parseInt(limit)
    const take = parseInt(limit)
    
    const where = {
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { content: { contains: search, mode: 'insensitive' } }
        ]
      }),
      ...(status && { status })
    }
    
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        include: {
          author: {
            select: { id: true, name: true, email: true }
          },
          categories: {
            include: {
              category: true
            }
          }
        },
        skip,
        take,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.post.count({ where })
    ])
    
    return c.json({
      posts,
      pagination: {
        page: parseInt(page),
        limit: take,
        total,
        pages: Math.ceil(total / take)
      }
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Get single post
postsRouter.get('/:id', async (c) => {
  const id = c.req.param('id')
  
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, name: true, email: true }
        },
        categories: {
          include: {
            category: true
          }
        },
        media: true
      }
    })
    
    if (!post) {
      return c.json({ error: 'Post not found' }, 404)
    }
    
    return c.json({ post })
  } catch (error) {
    console.error('Error fetching post:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Create post
postsRouter.post('/', zValidator('json', createPostSchema), async (c) => {
  const data = c.req.valid('json')
  const user = c.get('user')
  
  try {
    const { categoryIds, ...postData } = data
    
    const post = await prisma.post.create({
      data: {
        ...postData,
        authorId: user.id,
        ...(categoryIds && categoryIds.length > 0 && {
          categories: {
            create: categoryIds.map(categoryId => ({
              category: { connect: { id: categoryId } }
            }))
          }
        })
      },
      include: {
        author: {
          select: { id: true, name: true, email: true }
        },
        categories: {
          include: {
            category: true
          }
        }
      }
    })
    
    return c.json({ post }, 201)
  } catch (error) {
    console.error('Error creating post:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Update post
postsRouter.put('/:id', zValidator('json', updatePostSchema), async (c) => {
  const id = c.req.param('id')
  const data = c.req.valid('json')
  const user = c.get('user')
  
  try {
    const { categoryIds, ...postData } = data
    
    // Check if post exists and user has permission
    const existingPost = await prisma.post.findUnique({
      where: { id },
      include: { categories: true }
    })
    
    if (!existingPost) {
      return c.json({ error: 'Post not found' }, 404)
    }
    
    // Only allow authors or admins to update
    if (existingPost.authorId !== user.id && user.role !== 'ADMIN') {
      return c.json({ error: 'Unauthorized' }, 403)
    }
    
    const post = await prisma.post.update({
      where: { id },
      data: {
        ...postData,
        ...(categoryIds && {
          categories: {
            deleteMany: {},
            create: categoryIds.map(categoryId => ({
              category: { connect: { id: categoryId } }
            }))
          }
        })
      },
      include: {
        author: {
          select: { id: true, name: true, email: true }
        },
        categories: {
          include: {
            category: true
          }
        }
      }
    })
    
    return c.json({ post })
  } catch (error) {
    console.error('Error updating post:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Delete post
postsRouter.delete('/:id', async (c) => {
  const id = c.req.param('id')
  const user = c.get('user')
  
  try {
    const post = await prisma.post.findUnique({
      where: { id }
    })
    
    if (!post) {
      return c.json({ error: 'Post not found' }, 404)
    }
    
    // Only allow authors or admins to delete
    if (post.authorId !== user.id && user.role !== 'ADMIN') {
      return c.json({ error: 'Unauthorized' }, 403)
    }
    
    await prisma.post.delete({
      where: { id }
    })
    
    return c.json({ message: 'Post deleted successfully' })
  } catch (error) {
    console.error('Error deleting post:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

