// components/posts/edit-post-form.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MultiTypeEditor } from '@/components/editor/multi-type-editor'
import { MediaUpload } from '@/components/editor/media-upload'
import { PostSettings } from '@/components/posts/post-settings'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PostFormData, PostType } from './new-post-form'

interface EditPostFormProps {
  post: PostFormData & {
    id: string
    createdAt: string
    updatedAt: string
  }
}

export function EditPostForm({ post }: EditPostFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    content: '',
    excerpt: '',
    type: 'blog',
    featuredImage: undefined,
    status: 'draft',
    tags: [],
    categories: [],
    seoTitle: '',
    seoDescription: ''
  })

  // Initialize form data when post is loaded
  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        content: post.content || '',
        excerpt: post.excerpt || '',
        type: post.type || 'blog',
        featuredImage: post.featuredImage,
        status: post.status || 'draft',
        tags: post.tags || [],
        categories: post.categories || [],
        seoTitle: post.seoTitle || '',
        seoDescription: post.seoDescription || ''
      })
      setIsLoading(false)
    }
  }, [post])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          updatedAt: new Date().toISOString()
        }),
      })

      if (response.ok) {
        router.push('/content/posts')
        router.refresh() // Refresh the page to show updated data
      } else {
        console.error('Failed to update post')
      }
    } catch (error) {
      console.error('Error updating post:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSaveDraft = async () => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          status: 'draft',
          updatedAt: new Date().toISOString()
        }),
      })

      if (response.ok) {
        router.refresh() // Refresh to show updated status
        // Optional: Show success message
      }
    } catch (error) {
      console.error('Error saving draft:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateFormData = (updates: Partial<PostFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-10 bg-muted rounded"></div>
                  <div className="h-10 bg-muted rounded"></div>
                  <div className="h-64 bg-muted rounded"></div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <div className="h-80 bg-muted rounded"></div>
            <div className="h-32 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => updateFormData({ title: e.target.value })}
                    placeholder="Enter post title..."
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Input
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => updateFormData({ excerpt: e.target.value })}
                    placeholder="Brief description..."
                  />
                </div>

                <Tabs defaultValue="content" className="w-full">
                  <TabsList>
                    <TabsTrigger value="content">Content</TabsTrigger>
                    <TabsTrigger value="media">Media</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="content" className="space-y-4">
                    <MultiTypeEditor
                      content={formData.content}
                      onChange={(content) => updateFormData({ content })}
                      postType={formData.type}
                    />
                  </TabsContent>
                  
                  <TabsContent value="media">
                    <MediaUpload
                      onMediaSelect={(mediaUrl) => {
                        // Handle media insertion based on post type
                        if (formData.type === 'image') {
                          updateFormData({ featuredImage: mediaUrl })
                        }
                        // You could also add logic to insert media into the editor content
                      }}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <PostSettings
            formData={formData}
            onUpdate={updateFormData}
          />
          
          <Card>
            <CardHeader>
              <CardTitle>Update Post</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleSaveDraft}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Saving...' : 'Save Draft'}
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? 'Updating...' : formData.status === 'draft' ? 'Publish' : 'Update Post'}
                </Button>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p className="flex justify-between">
                  <span>Created:</span>
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </p>
                <p className="flex justify-between">
                  <span>Last updated:</span>
                  <span>{new Date(post.updatedAt).toLocaleDateString()}</span>
                </p>
                <p className="flex justify-between">
                  <span>Post ID:</span>
                  <span className="font-mono">{post.id}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  )
}