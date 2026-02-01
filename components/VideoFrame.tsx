'use client';

import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';

const VideoFrame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-4xl w-full mx-auto p-6">
      {/* Video Container */}
      <div 
        onClick={togglePlay}
        className="relative group cursor-pointer overflow-hidden shadow-2xl rounded-sm aspect-video bg-zinc-200"
      >
        {/* Actual Video Element */}
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls={isPlaying}
        >
          <source 
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* Custom Overlay UI - Hidden when playing */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300">
            <div className="w-20 h-20 bg-[#F7C51E] rounded-full flex items-center justify-center text-black transform group-hover:scale-110 transition-transform shadow-xl">
              <Play fill="black" size={32} />
            </div>
          </div>
        )}

        {/* Label Badge */}
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-[10px] uppercase tracking-wider font-medium pointer-events-none">
          Watch our 2024 Impact Report
        </div>
      </div>

      {/* Component Footer */}
      <div className="text-center pt-10 border-t border-zinc-300 mt-8 text-zinc-500 text-[9px] uppercase tracking-[0.4em]">
        © {currentYear} Empowerment Global Foundation. Transparency in every dollar.
      </div>
    </div>
  );
};

export default VideoFrame

// export default function App() {
//   return (
//     <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
//       <VideoFrame />
//     </div>
//   );
// }