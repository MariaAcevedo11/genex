"use client";

// ─────────────────────────────────────────────────────────────────────────────
// GENEX — Shared Dynamic Components
// DynamicDivider and DynamicCorners accept a ResultTheme and render
// fully themed SVG / DOM decorations. Drop these into both quiz pages.
// ─────────────────────────────────────────────────────────────────────────────

import { ResultTheme } from "@/data/resultThemes";

// ─── Divider ─────────────────────────────────────────────────────────────────

interface DividerProps {
  theme: ResultTheme;
}

export function DynamicDivider({ theme }: DividerProps) {
  return (
    <div className="flex items-center gap-3 my-1">
      <div
        className="h-px flex-1"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.accentDim.replace("0.4", "0.55")}, transparent)`,
        }}
      />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <rect
          x="4"
          y="0"
          width="4"
          height="4"
          fill={theme.accentMid}
          transform="rotate(45 6 6)"
        />
      </svg>
      <div
        className="h-px flex-1"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.accentDim.replace("0.4", "0.7")}, transparent)`,
        }}
      />
    </div>
  );
}

// ─── Corners ─────────────────────────────────────────────────────────────────

interface CornersProps {
  theme: ResultTheme;
}

export function DynamicCorners({ theme }: CornersProps) {
  const strokeMain = theme.accentMid;
  const strokeLight = theme.accentDim.replace("0.4", "0.4");
  const dot = theme.accent;

  const CornerSVG = () => (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M2 32 L2 2 L32 2" stroke={strokeMain} strokeWidth="1.5" />
      <path
        d="M2 16 L2 2 L16 2"
        stroke={strokeLight}
        strokeWidth="0.5"
        opacity="0.5"
      />
      <circle cx="2" cy="2" r="2" fill={dot} />
      <path
        d="M8 2 L8 8"
        stroke={strokeLight}
        strokeWidth="0.5"
        opacity="0.4"
      />
      <path
        d="M2 8 L8 8"
        stroke={strokeLight}
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );

  return (
    <>
      <span className="absolute left-0  top-0    z-20 h-16 w-16 opacity-70">
        <CornerSVG />
      </span>
      <span className="absolute right-0 top-0    z-20 h-16 w-16 opacity-70 rotate-90">
        <CornerSVG />
      </span>
      <span className="absolute left-0  bottom-0 z-20 h-16 w-16 opacity-70 -rotate-90">
        <CornerSVG />
      </span>
      <span className="absolute right-0 bottom-0 z-20 h-16 w-16 opacity-70 rotate-180">
        <CornerSVG />
      </span>
    </>
  );
}
