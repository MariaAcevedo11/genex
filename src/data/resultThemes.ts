// ─────────────────────────────────────────────────────────────────────────────
// GENEX — Dynamic Result Theme System
// Each tribe / character has a full visual theme that takes over the UI
// when revealed as the quiz result.
// ─────────────────────────────────────────────────────────────────────────────

export interface ResultTheme {
  // Core accent (used for borders, divider diamond, progress bar tip, button text)
  accent: string; // e.g. "rgba(50,200,120,1)"
  accentMid: string; // slightly muted — borders, hover states
  accentDim: string; // very muted — card border at rest, track bg

  // Gradient stops for the name title (top → bottom)
  gradientTop: string; // e.g. "#d0f0e0"
  gradientMid: string; // e.g. "#60c890"
  gradientBot: string; // e.g. "#2a8050"

  // Glow shadow on the name text
  glowColor: string; // e.g. "rgba(35,110,70,0.55)"

  // Image drop-shadow
  imageShadow: string; // e.g. "rgba(35,110,70,0.4)"

  // Ambient orbs (background pulse blobs)
  orbA: string; // radial-gradient string
  orbB: string;

  // Card background tint (very subtle)
  cardBg: string; // e.g. "rgba(2,10,5,0.6)"

  // Body text color
  bodyText: string;
}

// ─── TRIBES ──────────────────────────────────────────────────────────────────

const leo: ResultTheme = {
  // Blazing solar gold
  accent: "rgba(255,210,60,1)",
  accentMid: "rgba(200,160,40,0.8)",
  accentDim: "rgba(160,120,30,0.4)",
  gradientTop: "#fff5c0",
  gradientMid: "#f0c030",
  gradientBot: "#a07010",
  glowColor: "rgba(200,150,20,0.65)",
  imageShadow: "rgba(200,150,20,0.45)",
  orbA: "radial-gradient(circle, rgba(200,160,30,0.38) 0%, rgba(160,120,20,0.1) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(180,140,25,0.28) 0%, rgba(130,100,15,0.07) 50%, transparent 70%)",
  cardBg: "rgba(10,7,1,0.72)",
  bodyText: "rgba(230,200,120,1)",
};

const lupus: ResultTheme = {
  // Deep emerald — predatory, alive
  accent: "rgba(50,200,110,1)",
  accentMid: "rgba(35,150,80,0.85)",
  accentDim: "rgba(25,100,55,0.4)",
  gradientTop: "#c0f0d8",
  gradientMid: "#30b870",
  gradientBot: "#0e6035",
  glowColor: "rgba(25,120,60,0.6)",
  imageShadow: "rgba(25,120,60,0.45)",
  orbA: "radial-gradient(circle, rgba(30,140,70,0.38) 0%, rgba(20,100,50,0.1) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(25,120,60,0.28) 0%, rgba(15,85,40,0.07) 50%, transparent 70%)",
  cardBg: "rgba(1,9,4,0.72)",
  bodyText: "rgba(130,220,165,1)",
};

const dentes: ResultTheme = {
  // Blood red — sharp, brutal
  accent: "rgba(220,65,60,1)",
  accentMid: "rgba(170,45,45,0.85)",
  accentDim: "rgba(120,30,30,0.4)",
  gradientTop: "#ffd0cc",
  gradientMid: "#d83030",
  gradientBot: "#7a1010",
  glowColor: "rgba(180,30,30,0.65)",
  imageShadow: "rgba(180,30,30,0.45)",
  orbA: "radial-gradient(circle, rgba(180,30,30,0.38) 0%, rgba(130,20,20,0.1) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(160,25,25,0.28) 0%, rgba(110,15,15,0.07) 50%, transparent 70%)",
  cardBg: "rgba(8,1,1,0.72)",
  bodyText: "rgba(230,160,155,1)",
};

const avis: ResultTheme = {
  // Sky blue — free, ethereal
  accent: "rgba(80,185,240,1)",
  accentMid: "rgba(50,145,200,0.85)",
  accentDim: "rgba(30,100,160,0.4)",
  gradientTop: "#d0f0ff",
  gradientMid: "#40aee8",
  gradientBot: "#1060a0",
  glowColor: "rgba(30,130,200,0.6)",
  imageShadow: "rgba(30,130,200,0.45)",
  orbA: "radial-gradient(circle, rgba(40,140,210,0.35) 0%, rgba(25,100,170,0.1) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(35,120,190,0.26) 0%, rgba(20,85,150,0.07) 50%, transparent 70%)",
  cardBg: "rgba(1,5,12,0.72)",
  bodyText: "rgba(140,210,245,1)",
};

const phantus: ResultTheme = {
  // Deep violet — spectral, mysterious
  accent: "rgba(180,90,240,1)",
  accentMid: "rgba(140,60,200,0.85)",
  accentDim: "rgba(100,35,150,0.4)",
  gradientTop: "#f0d0ff",
  gradientMid: "#b050e0",
  gradientBot: "#5a1090",
  glowColor: "rgba(130,40,190,0.65)",
  imageShadow: "rgba(130,40,190,0.45)",
  orbA: "radial-gradient(circle, rgba(140,50,200,0.38) 0%, rgba(100,30,160,0.1) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(120,40,180,0.28) 0%, rgba(80,20,130,0.07) 50%, transparent 70%)",
  cardBg: "rgba(5,1,10,0.72)",
  bodyText: "rgba(210,165,245,1)",
};

// ─── CHARACTERS ──────────────────────────────────────────────────────────────

const lia: ResultTheme = {
  // Silver-white — enigmatic, liminal
  accent: "rgba(200,220,235,1)",
  accentMid: "rgba(150,175,195,0.85)",
  accentDim: "rgba(100,130,155,0.4)",
  gradientTop: "#ffffff",
  gradientMid: "#b8d0e8",
  gradientBot: "#607a90",
  glowColor: "rgba(140,175,205,0.55)",
  imageShadow: "rgba(140,175,205,0.4)",
  orbA: "radial-gradient(circle, rgba(140,175,205,0.32) 0%, rgba(100,140,170,0.1) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(120,160,190,0.22) 0%, rgba(80,120,155,0.07) 50%, transparent 70%)",
  cardBg: "rgba(3,5,8,0.72)",
  bodyText: "rgba(185,210,230,1)",
};

const amelia: ResultTheme = {
  // Dark forest green — grounded, ancient
  accent: "rgba(60,155,85,1)",
  accentMid: "rgba(40,115,60,0.85)",
  accentDim: "rgba(25,75,40,0.4)",
  gradientTop: "#b0ddc0",
  gradientMid: "#388050",
  gradientBot: "#0f4020",
  glowColor: "rgba(25,100,45,0.6)",
  imageShadow: "rgba(25,100,45,0.45)",
  orbA: "radial-gradient(circle, rgba(30,110,55,0.38) 0%, rgba(20,80,40,0.1) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(25,95,48,0.28) 0%, rgba(15,65,30,0.07) 50%, transparent 70%)",
  cardBg: "rgba(1,7,3,0.72)",
  bodyText: "rgba(120,195,145,1)",
};

const adam: ResultTheme = {
  // Radiant solar yellow — heroic, blinding
  accent: "rgba(255,225,50,1)",
  accentMid: "rgba(220,185,30,0.85)",
  accentDim: "rgba(170,135,20,0.4)",
  gradientTop: "#fffde0",
  gradientMid: "#f5d020",
  gradientBot: "#a08000",
  glowColor: "rgba(220,180,10,0.7)",
  imageShadow: "rgba(220,180,10,0.5)",
  orbA: "radial-gradient(circle, rgba(220,185,20,0.42) 0%, rgba(170,140,10,0.12) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(200,165,15,0.3) 0%, rgba(150,120,8,0.08) 50%, transparent 70%)",
  cardBg: "rgba(10,8,0,0.72)",
  bodyText: "rgba(240,215,110,1)",
};

const annie: ResultTheme = {
  // Baby pink — soft, delicate, pastel
  accent: "rgba(255,182,210,1)",
  accentMid: "rgba(240,150,185,0.9)",
  accentDim: "rgba(220,120,165,0.38)",
  gradientTop: "#fff0f5",
  gradientMid: "#ffb6d0",
  gradientBot: "#e880aa",
  glowColor: "rgba(240,140,180,0.55)",
  imageShadow: "rgba(240,150,185,0.45)",
  orbA: "radial-gradient(circle, rgba(255,160,195,0.32) 0%, rgba(230,120,165,0.1) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(240,140,180,0.26) 0%, rgba(210,100,150,0.08) 50%, transparent 70%)",
  cardBg: "rgba(10,4,7,0.72)",
  bodyText: "rgba(255,220,235,1)",
};

const alex: ResultTheme = {
  // Clay red / terracotta — raw, earthy
  accent: "rgba(200,100,70,1)",
  accentMid: "rgba(160,70,45,0.85)",
  accentDim: "rgba(110,45,28,0.4)",
  gradientTop: "#ffd8c8",
  gradientMid: "#c06040",
  gradientBot: "#6a2510",
  glowColor: "rgba(160,60,35,0.62)",
  imageShadow: "rgba(160,60,35,0.45)",
  orbA: "radial-gradient(circle, rgba(165,65,40,0.38) 0%, rgba(120,45,25,0.1) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(145,55,35,0.28) 0%, rgba(100,35,18,0.07) 50%, transparent 70%)",
  cardBg: "rgba(9,3,1,0.72)",
  bodyText: "rgba(230,175,150,1)",
};

const paulo: ResultTheme = {
  // Vivid electric purple — loud, unhinged
  accent: "rgba(210,50,255,1)",
  accentMid: "rgba(165,30,215,0.85)",
  accentDim: "rgba(115,15,165,0.4)",
  gradientTop: "#f8d0ff",
  gradientMid: "#d030ff",
  gradientBot: "#720090",
  glowColor: "rgba(180,20,240,0.7)",
  imageShadow: "rgba(180,20,240,0.5)",
  orbA: "radial-gradient(circle, rgba(185,20,245,0.4) 0%, rgba(140,10,200,0.12) 50%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(165,15,225,0.3) 0%, rgba(120,8,175,0.08) 50%, transparent 70%)",
  cardBg: "rgba(6,0,10,0.72)",
  bodyText: "rgba(225,160,250,1)",
};

// ─── LOOKUP MAPS ─────────────────────────────────────────────────────────────

export const TRIBE_THEMES: Record<string, ResultTheme> = {
  leo,
  lupus,
  dentes,
  avis,
  phantus,
};

export const CHARACTER_THEMES: Record<string, ResultTheme> = {
  lia,
  amelia,
  adam,
  annie,
  alex,
  paulo,
};

// Fallback (neutral warm tone — used if an ID doesn't match)
export const FALLBACK_THEME: ResultTheme = {
  accent: "rgba(180,160,120,1)",
  accentMid: "rgba(140,120,85,0.8)",
  accentDim: "rgba(100,80,50,0.4)",
  gradientTop: "#ede0c8",
  gradientMid: "#b09060",
  gradientBot: "#6a5030",
  glowColor: "rgba(130,100,50,0.5)",
  imageShadow: "rgba(130,100,50,0.35)",
  orbA: "radial-gradient(circle, rgba(140,110,50,0.3) 0%, transparent 70%)",
  orbB: "radial-gradient(circle, rgba(120,95,40,0.22) 0%, transparent 70%)",
  cardBg: "rgba(8,6,2,0.72)",
  bodyText: "rgba(210,185,140,1)",
};
