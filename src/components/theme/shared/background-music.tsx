'use client';

import { cn } from '@/lib/utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsFillDiscFill } from 'react-icons/bs';

type TProps = {
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BackgroundMusic({ play, setPlay }: TProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = useCallback(() => {
    setPlay((prev) => !prev);
  }, [setPlay]);

  useEffect(() => {
    if (audioRef.current) {
      if (play) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [play]);

  return (
    <div
      role="presentation"
      onClick={toggleAudio}
      className={cn(
        ' fixed bottom-24 right-4 z-[32] flex aspect-square w-12 animate-spin cursor-pointer items-center justify-center rounded-full bg-black sm:right-[calc(50%-220px)] lg:right-4',
        { paused: !play },
      )}
      style={{ animationDuration: '10s' }}
    >
      <audio
        src="/audio/luther-vandross-endless-love.mp3"
        ref={audioRef}
      />
      <BsFillDiscFill
        className=" text-white"
        size={20}
      />
    </div>
  );
}
