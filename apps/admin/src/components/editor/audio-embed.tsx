// components/editor/audio-embed.tsx
'use client'

import { useState, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Music, Play, Pause, Volume2, Upload } from 'lucide-react'

interface AudioEmbedProps {
  onEmbed: (url: string) => void
}

export function AudioEmbed({ onEmbed }: AudioEmbedProps) {
  const [audioUrl, setAudioUrl] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState([80])
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleEmbed = () => {
    if (audioUrl.trim()) {
      onEmbed(audioUrl.trim())
      setAudioUrl('')
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith('audio/')) {
      const objectUrl = URL.createObjectURL(file)
      setAudioUrl(objectUrl)
    }
  }

  const togglePlayback = useCallback(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      if (!duration) {
        setDuration(audioRef.current.duration || 0)
      }
    }
  }, [duration])

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }, [])

  const handleSeek = useCallback((value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }, [])

  const handleVolumeChange = useCallback((value: number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100
      setVolume(value)
    }
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 space-y-2">
          <Label htmlFor="audio-url">Audio URL or Upload</Label>
          <div className="flex gap-2">
            <Input
              id="audio-url"
              placeholder="https://example.com/audio.mp3 or paste URL"
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              asChild
            >
              <label className="cursor-pointer">
                <Upload className="h-4 w-4" />
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </Button>
          </div>
        </div>
        <div className="flex items-end">
          <Button 
            onClick={handleEmbed} 
            disabled={!audioUrl}
            className="whitespace-nowrap"
          >
            <Music className="h-4 w-4 mr-2" />
            Embed Audio
          </Button>
        </div>
      </div>

      {audioUrl && (
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Audio Preview</span>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={togglePlayback}
                  disabled={!audioUrl}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4 mr-1" />
                  ) : (
                    <Play className="h-4 w-4 mr-1" />
                  )}
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
              </div>
            </div>

            {/* Audio Player */}
            <div className="space-y-3">
              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <Slider
                  value={[currentTime]}
                  max={duration}
                  step={0.1}
                  onValueChange={handleSeek}
                  className="w-full"
                />
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <Slider
                  value={volume}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
                  className="w-24"
                />
                <span className="text-xs text-muted-foreground w-8">
                  {volume[0]}%
                </span>
              </div>

              {/* Audio File Info */}
              <div className="text-xs text-muted-foreground">
                <p>Currently playing: {audioUrl.split('/').pop() || 'Audio file'}</p>
              </div>
            </div>

            {/* Hidden audio element */}
            <audio
              ref={audioRef}
              src={audioUrl}
              onEnded={() => setIsPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="hidden"
            />
          </CardContent>
        </Card>
      )}

      <div className="text-xs text-muted-foreground">
        <p>Supported formats: MP3, WAV, OGG, AAC</p>
        <p>You can paste a direct audio URL or upload a file</p>
      </div>
    </div>
  )
}