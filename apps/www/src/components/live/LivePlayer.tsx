"use client";
import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from 'react-icons/fa';

interface LivePlayerProps {
  streamUrl: string;
  thumbnail: string;
}

const LivePlayer = ({ streamUrl, thumbnail }: LivePlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="relative w-full aspect-video bg-black">
      <video
        ref={videoRef}
        src={streamUrl}
        poster={thumbnail}
        autoPlay
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Controls Overlay */}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="w-full">
          {/* Progress Bar */}
          <div className="h-1 w-full bg-gray-600 mb-2 rounded-full">
            <div 
              className="h-full bg-yellow-500 rounded-full" 
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button 
                onClick={togglePlay}
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
              </button>
              <button 
                onClick={toggleMute}
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
              </button>
            </div>

            <button 
              onClick={toggleFullscreen}
              className="text-white hover:text-yellow-400 transition-colors"
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              <FaExpand size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePlayer;