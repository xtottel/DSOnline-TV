// app/dashboard/posts/new/page.tsx
import { NewPostForm } from '@/components/posts/new-post-form'

export default function NewPostPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Create New Post</h1>
      </div>
      <NewPostForm />
    </div>
  )
}