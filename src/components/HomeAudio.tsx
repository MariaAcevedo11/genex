"use client";

// ─────────────────────────────────────────────────────────────────────────────
// HomeAudio — drop this anywhere inside your home page component.
// It self-contains the audio logic so your home page stays clean.
//
// Usage:
//   import { HomeAudio } from "@/components/HomeAudio";
//   // Inside your home page JSX:
//   <HomeAudio />
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { MuteButton } from "@/components/MuteButton";

export function HomeAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/home.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;
    audio.play().catch(() => {});
    return () => {
      audio.pause();
    };
  }, []);

  function toggleMute() {
    setMuted((prev) => {
      const next = !prev;
      if (audioRef.current) audioRef.current.volume = next ? 0 : 0.4;
      return next;
    });
  }

  function ensurePlay() {
    if (audioRef.current?.paused) audioRef.current.play().catch(() => {});
  }

  return (
    <MuteButton
      muted={muted}
      onToggle={toggleMute}
      onFirstClick={ensurePlay}
      accent="rgba(180,140,40,1)" // golden — adjust to your home accent color
    />
  );
}
