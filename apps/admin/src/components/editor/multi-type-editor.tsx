// components/editor/multi-type-editor.tsx
'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Youtube from '@tiptap/extension-youtube'
import { EditorToolbar } from './editor-toolbar'
import { VideoEmbed } from './video-embed'
import { AudioEmbed } from './audio-embed'
import { PostType } from '@/components/posts/new-post-form'
import { useEffect, useState } from 'react'

interface MultiTypeEditorProps {
  content: string
  onChange: (content: string) => void
  postType: PostType
}

// Loading skeleton component
function EditorSkeleton() {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-muted/50">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-8 w-8 bg-muted rounded animate-pulse" />
        ))}
      </div>
      <div className="min-h-[400px] p-4 bg-muted/20 animate-pulse">
        <div className="h-4 bg-muted rounded mb-2 w-3/4" />
        <div className="h-4 bg-muted rounded mb-2 w-1/2" />
        <div className="h-4 bg-muted rounded mb-2 w-2/3" />
      </div>
    </div>
  )
}

export function MultiTypeEditor({ content, onChange, postType }: MultiTypeEditorProps) {
  const [isMounted, setIsMounted] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-lg max-w-full h-auto',
        },
        inline: true,
      }),
      Youtube.configure({
        HTMLAttributes: {
          class: 'rounded-lg w-full',
        },
        inline: false,
        width: '100%',
        height: 400,
      }),
    ],
    content: isMounted ? content : '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] p-4',
      },
    },
    immediatelyRender: false,
    enableCoreExtensions: true,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Update content when it changes from props
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content, false)
    }
  }, [content, editor])

  if (!isMounted) {
    return <EditorSkeleton />
  }

  if (!editor) {
    return (
      <div className="border rounded-lg p-4 text-center text-muted-foreground">
        Failed to initialize editor. Please refresh the page.
      </div>
    )
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <EditorToolbar editor={editor} postType={postType} />
      
      {postType === 'video' && (
        <div className="p-4 border-b bg-muted/30">
          <VideoEmbed onEmbed={(url) => {
            editor.commands.setYoutubeVideo({ 
              src: url,
              width: '100%',
              height: 400 
            })
          }} />
        </div>
      )}
      
      {postType === 'audio' && (
        <div className="p-4 border-b bg-muted/30">
          <AudioEmbed onEmbed={(url) => {
            const audioHTML = `<div class="audio-embed"><audio controls src="${url}" class="w-full"></audio></div>`
            editor.commands.insertContent(audioHTML)
          }} />
        </div>
      )}
      
      <EditorContent editor={editor} />
    </div>
  )
}