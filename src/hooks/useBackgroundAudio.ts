"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// useBackgroundAudio
//
// Manages two audio tracks per page:
//   - quizTrack  : plays during the quiz phase
//   - resultTrack: crossfades in when the result is revealed
//
// Place your audio files in /public/audio/:
//   /public/audio/home.mp3
//   /public/audio/tribes-quiz.mp3
//   /public/audio/characters-quiz.mp3
//   /public/audio/result.mp3
// ─────────────────────────────────────────────────────────────────────────────

interface UseBackgroundAudioOptions {
  quizSrc: string; // e.g. "/audio/tribes-quiz.mp3"
  resultSrc: string; // e.g. "/audio/result.mp3"
  finished: boolean; // when true, crossfade to resultSrc
  volume?: number; // 0–1, default 0.4
  fadeMs?: number; // crossfade duration ms, default 1200
}

export function useBackgroundAudio({
  quizSrc,
  resultSrc,
  finished,
  volume = 0.4,
  fadeMs = 1200,
}: UseBackgroundAudioOptions) {
  const quizRef = useRef<HTMLAudioElement | null>(null);
  const resultRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const fadedOut = useRef(false);

  // ── Bootstrap audio elements once ──────────────────────────────────────
  useEffect(() => {
    const quiz = new Audio(quizSrc);
    quiz.loop = true;
    quiz.volume = volume;
    quizRef.current = quiz;

    const result = new Audio(resultSrc);
    result.loop = false;
    result.volume = 0; // starts silent, fades in
    resultRef.current = result;

    // Autoplay — browsers require a user gesture on some devices;
    // we attempt play and silently swallow the rejection (button still works).
    quiz.play().catch(() => {});

    return () => {
      quiz.pause();
      result.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Crossfade when quiz finishes ────────────────────────────────────────
  useEffect(() => {
    if (!finished || fadedOut.current) return;
    fadedOut.current = true;

    const quiz = quizRef.current;
    const result = resultRef.current;
    if (!quiz || !result) return;

    result.play().catch(() => {});

    const steps = 30;
    const interval = fadeMs / steps;
    const targetVol = muted ? 0 : volume;
    let step = 0;

    const tick = setInterval(() => {
      step++;
      const progress = step / steps;
      quiz.volume = Math.max(0, volume * (1 - progress));
      result.volume = Math.min(targetVol, targetVol * progress);
      if (step >= steps) {
        clearInterval(tick);
        quiz.pause();
      }
    }, interval);

    return () => clearInterval(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  // ── Mute / unmute both tracks ───────────────────────────────────────────
  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      const active = finished ? resultRef.current : quizRef.current;
      if (active) active.volume = next ? 0 : volume;
      return next;
    });
  }, [finished, volume]);

  // If autoplay was blocked, toggling unmute should also start playback
  const ensurePlay = useCallback(() => {
    const quiz = quizRef.current;
    if (quiz && quiz.paused && !finished) quiz.play().catch(() => {});
  }, [finished]);

  return { muted, toggleMute, ensurePlay };
}
