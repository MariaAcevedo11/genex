"use client";

// ─────────────────────────────────────────────────────────────────────────────
// MuteButton — floating bottom-right corner
// Receives muted state + toggle handler + an optional accent color so it
// can tint itself to match the current result theme.
// ─────────────────────────────────────────────────────────────────────────────

interface MuteButtonProps {
  muted: boolean;
  onToggle: () => void;
  onFirstClick?: () => void; // used to start audio if autoplay was blocked
  accent?: string; // e.g. "rgba(50,200,110,1)" — defaults to white
}

export function MuteButton({
  muted,
  onToggle,
  onFirstClick,
  accent = "rgba(255,255,255,0.85)",
}: MuteButtonProps) {
  function handleClick() {
    onFirstClick?.();
    onToggle();
  }

  return (
    <button
      onClick={handleClick}
      aria-label={muted ? "Unmute background music" : "Mute background music"}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center border backdrop-blur-md transition-all duration-300"
      style={{
        borderColor: muted
          ? "rgba(255,255,255,0.15)"
          : `${accent.replace(/[\d.]+\)$/, "0.45)")}`,
        background: muted
          ? "rgba(0,0,0,0.45)"
          : `${accent.replace(/[\d.]+\)$/, "0.08)")}`,
        color: muted ? "rgba(255,255,255,0.35)" : accent,
        boxShadow: muted
          ? "none"
          : `0 0 14px ${accent.replace(/[\d.]+\)$/, "0.25)")}`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = muted
          ? "rgba(255,255,255,0.08)"
          : `${accent.replace(/[\d.]+\)$/, "0.18)")}`;
        (e.currentTarget as HTMLButtonElement).style.borderColor = muted
          ? "rgba(255,255,255,0.3)"
          : accent;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = muted
          ? "rgba(0,0,0,0.45)"
          : `${accent.replace(/[\d.]+\)$/, "0.08)")}`;
        (e.currentTarget as HTMLButtonElement).style.borderColor = muted
          ? "rgba(255,255,255,0.15)"
          : `${accent.replace(/[\d.]+\)$/, "0.45)")}`;
      }}
    >
      {muted ? <IconMuted /> : <IconUnmuted />}
    </button>
  );
}

// ── SVG icons ────────────────────────────────────────────────────────────────

function IconUnmuted() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function IconMuted() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}
