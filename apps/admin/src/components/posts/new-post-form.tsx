// components/posts/new-post-form.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MultiTypeEditor } from '@/components/editor/multi-type-editor'
import { MediaUpload } from '@/components/editor/media-upload'
import { PostSettings } from '@/components/posts/post-settings'

export type PostType = 'blog' | 'video' | 'audio' | 'image' | 'mixed'

export interface PostFormData {
  title: string
  content: string
  excerpt: string
  type: PostType
  featuredImage?: string
  status: 'draft' | 'published'
  tags: string[]
  categories: string[]
  seoTitle?: string
  seoDescription?: string
}

export function NewPostForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    content: '',
    excerpt: '',
    type: 'blog',
    status: 'draft',
    tags: [],
    categories: []
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/contents/posts')
      }
    } catch (error) {
      console.error('Error creating post:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateFormData = (updates: Partial<PostFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
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
              <CardTitle>Publish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => updateFormData({ status: 'draft' })}
                >
                  Save Draft
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {formData.status === 'draft' ? 'Publish' : 'Update'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  )
}