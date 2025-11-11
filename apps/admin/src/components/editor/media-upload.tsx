// components/editor/media-upload.tsx
'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Upload, X, Image as ImageIcon, Video, Music } from 'lucide-react'
import Image from 'next/image'

interface MediaUploadProps {
  onMediaSelect: (mediaUrl: string) => void
}

export function MediaUpload({ onMediaSelect }: MediaUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedMedia, setUploadedMedia] = useState<string[]>([])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFiles(files)
  }

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      // Simulate upload - in real app, upload to cloud storage
      const objectUrl = URL.createObjectURL(file)
      setUploadedMedia(prev => [...prev, objectUrl])
      
      // For demo, we'll use the object URL. In production, you'd get a CDN URL
      setTimeout(() => {
        onMediaSelect(objectUrl)
      }, 500)
    })
  }

  const getFileIcon = (fileUrl: string) => {
    const extension = fileUrl.split('.').pop()?.toLowerCase()
    if (['mp4', 'mov', 'avi'].includes(extension || '')) {
      return <Video className="h-8 w-8" />
    }
    if (['mp3', 'wav', 'ogg'].includes(extension || '')) {
      return <Music className="h-8 w-8" />
    }
    return <ImageIcon className="h-8 w-8" />
  }

  return (
    <div className="space-y-4">
      <Card className={`border-2 border-dashed ${
        isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
      }`}>
        <CardContent className="pt-6">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="flex flex-col items-center justify-center space-y-4 p-8 text-center"
          >
            <Upload className="h-12 w-12 text-muted-foreground" />
            <div className="space-y-2">
              <p className="font-medium">Drag and drop your files here</p>
              <p className="text-sm text-muted-foreground">
                Supports images, videos, and audio files
              </p>
            </div>
            <Button asChild>
              <label className="cursor-pointer">
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*,audio/*"
                  className="hidden"
                  onChange={handleFileInput}
                />
                Select Files
              </label>
            </Button>
          </div>
        </CardContent>
      </Card>

      {uploadedMedia.length > 0 && (
        <div>
          <h4 className="font-medium mb-3">Uploaded Media</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {uploadedMedia.map((mediaUrl, index) => (
              <div key={index} className="relative group">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-square flex items-center justify-center bg-muted">
                      {mediaUrl.includes('blob:') ? (
                        getFileIcon(mediaUrl)
                      ) : (
                        <Image
                          src={mediaUrl}
                          alt={`Uploaded media ${index + 1}`}
                          className="object-cover w-full h-full"
                        //   width={}
                        //   height={}
                          quality={90}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => {
                    setUploadedMedia(prev => prev.filter((_, i) => i !== index))
                    URL.revokeObjectURL(mediaUrl)
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}