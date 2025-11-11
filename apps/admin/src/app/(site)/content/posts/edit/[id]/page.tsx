// app/dashboard/posts/edit/[id]/page.tsx
import { notFound } from 'next/navigation'
import { EditPostForm } from '@/components/posts/edit-post-form'

interface EditPostPageProps {
  params: {
    id: string
  }
}

// Mock function to fetch post data - replace with your actual API call
async function getPost(id: string) {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const mockPosts = [
    {
      id: '1',
      title: 'Getting Started with Next.js 15',
      content: '<p>This is a sample blog post about Next.js 15.</p>',
      excerpt: 'Learn how to build modern web applications with Next.js 15',
      type: 'blog' as const,
      status: 'published' as const,
      featuredImage: '/images/nextjs.jpg',
      tags: ['nextjs', 'react', 'webdev'],
      categories: ['Technology', 'Programming'],
      seoTitle: 'Getting Started with Next.js 15 - Complete Guide',
      seoDescription: 'Learn how to build modern web applications with Next.js 15 and TypeScript',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    }
  ]

  return mockPosts.find(post => post.id === id) || null
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const post = await getPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Edit Post</h1>
          <p className="text-muted-foreground mt-1">
            Make changes to your post
          </p>
        </div>
      </div>
      <EditPostForm post={post} />
    </div>
  )
}