// types/post.ts
export interface Post {
  id: string
  title: string
  content: string
  excerpt: string
  type: 'blog' | 'video' | 'audio' | 'image' | 'mixed'
  status: 'draft' | 'published' | 'archived'
  featuredImage?: string
  tags: string[]
  categories: string[]
  authorId: string
  seoTitle?: string
  seoDescription?: string
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

export interface CreatePostDto {
  title: string
  content: string
  excerpt: string
  type: Post['type']
  status: Post['status']
  featuredImage?: string
  tags: string[]
  categories: string[]
  seoTitle?: string
  seoDescription?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UpdatePostDto extends Partial<CreatePostDto> {}