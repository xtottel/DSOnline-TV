// components/editor/video-embed.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Youtube, ExternalLink } from 'lucide-react'

interface VideoEmbedProps {
  onEmbed: (url: string) => void
}

export function VideoEmbed({ onEmbed }: VideoEmbedProps) {
  const [videoUrl, setVideoUrl] = useState('')

  const handleEmbed = () => {
    if (videoUrl) {
      onEmbed(videoUrl)
      setVideoUrl('')
    }
  }

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
    return match ? match[1] : null
  }

  const videoId = extractVideoId(videoUrl)

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 space-y-2">
          <Label htmlFor="video-url">YouTube URL</Label>
          <Input
            id="video-url"
            placeholder="https://www.youtube.com/watch?v=..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>
        <div className="flex items-end">
          <Button onClick={handleEmbed} disabled={!videoId}>
            <Youtube className="h-4 w-4 mr-2" />
            Embed
          </Button>
        </div>
      </div>

      {videoId && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Preview</span>
              <Button variant="ghost" size="sm" asChild>
                <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Open
                </a>
              </Button>
            </div>
            <div className="aspect-video bg-black rounded overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}