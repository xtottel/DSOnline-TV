// components/posts/post-settings.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PostFormData, PostType } from './new-post-form'
import { X, Image as ImageIcon, Upload } from 'lucide-react'
import { useState } from 'react'

interface PostSettingsProps {
  formData: PostFormData
  onUpdate: (updates: Partial<PostFormData>) => void
}

// Common categories for selection
const COMMON_CATEGORIES = [
  'Technology',
  'Lifestyle',
  'Education',
  'Entertainment',
  'Business',
  'Health',
  'Travel',
  'Food',
  'Music',
  'Art',
  'Sports',
  'Science'
]

export function PostSettings({ formData, onUpdate }: PostSettingsProps) {
  const [newTag, setNewTag] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      onUpdate({ tags: [...formData.tags, newTag.trim()] })
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    onUpdate({ tags: formData.tags.filter(tag => tag !== tagToRemove) })
  }

  const addCategory = (category: string) => {
    const categoryToAdd = category.trim()
    if (categoryToAdd && !formData.categories.includes(categoryToAdd)) {
      onUpdate({ categories: [...formData.categories, categoryToAdd] })
      setNewCategory('')
      setSelectedCategory('')
    }
  }

  const removeCategory = (categoryToRemove: string) => {
    onUpdate({ categories: formData.categories.filter(cat => cat !== categoryToRemove) })
  }

  const handleFeaturedImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Simulate upload - in real app, upload to cloud storage
      const objectUrl = URL.createObjectURL(file)
      onUpdate({ featuredImage: objectUrl })
    }
  }

  const removeFeaturedImage = () => {
    onUpdate({ featuredImage: undefined })
    // Also clear the file input
    const fileInput = document.getElementById('featured-image') as HTMLInputElement
    if (fileInput) {
      fileInput.value = ''
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Post Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Featured Image */}
        <div className="space-y-2">
          <Label htmlFor="featured-image">Featured Image</Label>
          <div className="space-y-3">
            {formData.featuredImage ? (
              <div className="relative group">
                <div className="border rounded-lg overflow-hidden">
                  <img
                    src={formData.featuredImage}
                    alt="Featured"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={removeFeaturedImage}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <ImageIcon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-3">No featured image</p>
              </div>
            )}
            
            <Button
              type="button"
              variant="outline"
              size="sm"
              asChild
              className="w-full"
            >
              <label htmlFor="featured-image" className="cursor-pointer">
                <Upload className="h-4 w-4 mr-2" />
                {formData.featuredImage ? 'Change Image' : 'Upload Featured Image'}
                <input
                  id="featured-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFeaturedImageUpload}
                />
              </label>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="post-type">Post Type</Label>
          <select
            id="post-type"
            value={formData.type}
            onChange={(e) => onUpdate({ type: e.target.value as PostType })}
            className="w-full p-2 border rounded-md"
          >
            <option value="blog">Blog Post</option>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
            <option value="image">Image Gallery</option>
            <option value="mixed">Mixed Media</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => onUpdate({ status: e.target.value as 'draft' | 'published' })}
            className="w-full p-2 border rounded-md"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        {/* Tags Section */}
        <div className="space-y-2">
          <Label>Tags</Label>
          <div className="flex gap-2">
            <Input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add tag..."
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            />
            <Button type="button" onClick={addTag} variant="outline">
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {formData.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                {tag}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => removeTag(tag)}
                />
              </Badge>
            ))}
          </div>
        </div>

        {/* Enhanced Categories Section */}
        <div className="space-y-2">
          <Label>Categories</Label>
          

          {/* Add Custom Category */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">
              Add Custom Category
            </Label>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  if (e.target.value) {
                    addCategory(e.target.value)
                  }
                }}
                className="flex-1 p-2 border rounded-md"
              >
                <option value="">Select a category</option>
                {COMMON_CATEGORIES.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Button
                type="button"
                onClick={() => selectedCategory && addCategory(selectedCategory)}
                variant="outline"
                disabled={!selectedCategory}
              >
                Add
              </Button>
            </div>
          </div>

          {/* Selected Categories */}
          <div className="mt-3">
            <Label className="text-xs text-muted-foreground mb-2 block">
              Selected Categories
            </Label>
            <div className="flex flex-wrap gap-1">
              {formData.categories.map(category => (
                <Badge key={category} variant="secondary" className="flex items-center gap-1">
                  {category}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeCategory(category)}
                  />
                </Badge>
              ))}
              {formData.categories.length === 0 && (
                <span className="text-xs text-muted-foreground">No categories selected</span>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="seo-title">SEO Title</Label>
          <Input
            id="seo-title"
            value={formData.seoTitle || ''}
            onChange={(e) => onUpdate({ seoTitle: e.target.value })}
            placeholder="SEO title..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="seo-description">SEO Description</Label>
          <textarea
            id="seo-description"
            value={formData.seoDescription || ''}
            onChange={(e) => onUpdate({ seoDescription: e.target.value })}
            placeholder="SEO description..."
            className="w-full p-2 border rounded-md min-h-[80px]"
          />
        </div>
      </CardContent>
    </Card>
  )
}