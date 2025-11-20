// src/schemas/index.ts
import { z } from 'zod'

export const createPostSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  excerpt: z.string().max(500).optional(),
  slug: z.string().min(1).max(255),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
  featured: z.boolean().optional(),
  categoryIds: z.array(z.string()).optional()
})

export const updatePostSchema = createPostSchema.partial()

export const createCategorySchema = z.object({
  name: z.string().min(1).max(255),
  slug: z.string().min(1).max(255),
  description: z.string().optional()
})

export const updateCategorySchema = createCategorySchema.partial()

export const createMediaSchema = z.object({
  filename: z.string().min(1),
  url: z.string().url(),
  mimeType: z.string().min(1),
  size: z.number().int().positive(),
  altText: z.string().optional()
})

export type CreatePostInput = z.infer<typeof createPostSchema>
export type UpdatePostInput = z.infer<typeof updatePostSchema>
export type CreateCategoryInput = z.infer<typeof createCategorySchema>
export type CreateMediaInput = z.infer<typeof createMediaSchema>