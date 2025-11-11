// app/dashboard/posts/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  FileText,
  Video,
  Music,
  Image as ImageIcon
} from 'lucide-react'

interface Post {
  id: string
  title: string
  excerpt: string
  type: 'blog' | 'video' | 'audio' | 'image' | 'mixed'
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
  featuredImage?: string
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      // Mock data - replace with actual API call
      const mockPosts: Post[] = [
        {
          id: '1',
          title: 'Getting Started with Next.js 15',
          excerpt: 'Learn how to build modern web applications with Next.js 15',
          type: 'blog',
          status: 'published',
          createdAt: '2024-01-15',
          updatedAt: '2024-01-15',
          featuredImage: '/images/nextjs.jpg'
        },
        {
          id: '2',
          title: 'Building a React Component Library',
          excerpt: 'A video tutorial on creating reusable React components',
          type: 'video',
          status: 'draft',
          createdAt: '2024-01-14',
          updatedAt: '2024-01-14'
        },
        {
          id: '3',
          title: 'Podcast: Modern Web Development',
          excerpt: 'Discussion about the latest trends in web development',
          type: 'audio',
          status: 'published',
          createdAt: '2024-01-13',
          updatedAt: '2024-01-13'
        },
        {
          id: '4',
          title: 'Nature Photography Collection',
          excerpt: 'Beautiful collection of nature photographs from around the world',
          type: 'image',
          status: 'published',
          createdAt: '2024-01-12',
          updatedAt: '2024-01-12',
          featuredImage: '/images/nature.jpg'
        }
      ]
      setPosts(mockPosts)
      setIsLoading(false)
    }

    fetchPosts()
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getTypeIcon = (type: Post['type']) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />
      case 'audio': return <Music className="h-4 w-4" />
      case 'image': return <ImageIcon className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getStatusVariant = (status: Post['status']) => {
    return status === 'published' ? 'default' : 'secondary'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const handleDelete = async (postId: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        // Simulate API call
        await fetch(`/api/posts/${postId}`, { method: 'DELETE' })
        setPosts(posts.filter(post => post.id !== postId))
      } catch (error) {
        console.error('Error deleting post:', error)
      }
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-64 mb-6"></div>
          <div className="h-12 bg-muted rounded mb-6"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Posts</h1>
          <p className="text-muted-foreground mt-1">
            Manage your blog posts, videos, audio, and other content
          </p>
        </div>
        <Button asChild>
          <Link href="/content/posts/new">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Posts</CardTitle>
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts by title or excerpt..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Type</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Categories</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div className="flex items-center justify-center">
                      {getTypeIcon(post.type)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      {post.featuredImage && (
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="h-10 w-10 rounded object-cover"
                        />
                      )}
                      <div className="min-w-0">
                        <div className="font-medium truncate max-w-xs">
                          {post.title}
                        </div>
                        <div className="text-sm text-muted-foreground truncate max-w-xs">
                          {post.excerpt}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(post.status)}>
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {post.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(post.createdAt)}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(post.updatedAt)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="h-8 w-8 p-0"
                      >
                        <Link href={`/posts/${post.id}`} target="_blank">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/content/posts/edit/${post.id}`}>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="text-destructive"
                            onClick={() => handleDelete(post.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                {searchTerm ? 'No posts found' : 'No posts yet'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm 
                  ? 'Try adjusting your search terms.' 
                  : 'Get started by creating your first post.'
                }
              </p>
              {!searchTerm && (
                <Button asChild>
                  <Link href="/content/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Post
                  </Link>
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}