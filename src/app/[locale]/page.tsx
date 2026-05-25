"use client";

import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { RadiationOrbs } from "@/components/RadiationOrbs";
import { RuneCorners } from "@/components/RuneCorners";

const DIVIDER = (
  <div className="flex items-center gap-3 my-1">
    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(30,110,85,0.4), transparent)",
      }}
    />
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <rect
        x="4"
        y="0"
        width="4"
        height="4"
        fill="rgba(30,110,85,0.65)"
        transform="rotate(45 6 6)"
      />
    </svg>
    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(30,110,85,0.4), transparent)",
      }}
    />
  </div>
);

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <main className="scanline-overlay relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="animate-slow-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/backgrounds/genex-home.png')" }}
      />

      {/* Layered overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(5,8,10,0.4) 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(14,80,65,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Ambient radiation orbs */}
      <RadiationOrbs />

      {/* Language switcher */}
      <div className="absolute right-6 top-6 z-30">
        <LanguageSwitcher />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 py-16">
        {/* Top rune line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 flex w-full items-center gap-4"
        >
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(30,110,85,0.55))",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "15px",
              letterSpacing: "0.4em",
              color: "rgba(80,180,140, 1)",
            }}
          >
            {t("era")}
          </span>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(30,110,85,0.55))",
            }}
          />
        </motion.div>

        {/* Title card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full rounded-none border p-10 text-center"
          style={{
            borderColor: "rgba(30,110,85,0.28)",
            background: "rgba(4,10,9,0.55)",
            backdropFilter: "blur(12px)",
          }}
        >
          <RuneCorners />

          {/* Subtitle above */}
          <p
            className="mb-3 tracking-[0.35em] uppercase"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "16px",
              color: "rgba(80,160,130,1)",
            }}
          >
            {t("world")}
          </p>

          {DIVIDER}

          {/* Title */}
          <motion.h1
            className="animate-flicker my-6 text-8xl font-black tracking-[0.15em] md:text-9xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            style={{
              fontFamily: "var(--font-cinzel-deco)",
              color: "transparent",
              background:
                "linear-gradient(180deg, #e8f4f0 0%, #aad4cc 18%, #6ab8a8 35%, #3a8878 55%, #2a6860 72%, #5aa898 85%, #aad4cc 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              filter:
                "drop-shadow(0 0 18px rgba(30,110,85,0.4)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))",
              paddingRight: "0.15em",
            }}
          >
            {t("title")}
          </motion.h1>

          {DIVIDER}

          {/* Subtitle */}
          <p
            className="mx-auto mt-6 max-w-md leading-relaxed"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "15px",
              color: "rgba(160,200,185,0.9)",
              letterSpacing: "0.05em",
            }}
          >
            {t("subtitle")}
          </p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link href={`/${locale}/tribe-quiz`}>
              <button
                className="group relative w-full overflow-hidden border px-8 py-4 transition-all duration-500 sm:w-auto"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "15px",
                  letterSpacing: "0.2em",
                  borderColor: "rgba(140,110,40,0.8)",
                  background: "rgba(140,110,40,0.15)",
                  color: "rgba(210,180,90,1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(140,110,40,0.28)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(180,150,60,1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(140,110,40,0.15)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(140,110,40,0.8)";
                }}
              >
                ▸ {t("tribeButton")}
              </button>
            </Link>

            <Link href={`/${locale}/character-quiz`}>
              <button
                className="group relative w-full overflow-hidden border px-8 py-4 transition-all duration-500 sm:w-auto"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "15px",
                  letterSpacing: "0.2em",
                  borderColor: "rgba(35,110,70,0.8)",
                  background: "rgba(35,110,70,0.15)",
                  color: "rgba(90,200,130,1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(35,110,70,0.28)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(50,150,95,1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(35,110,70,0.15)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(35,110,70,0.8)";
                }}
              >
                ▸ {t("characterButton")}
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom rune line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="mt-8 flex w-full items-center gap-4"
        >
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(30,110,85,0.3))",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "15px",
              letterSpacing: "0.5em",
              color: "rgba(80,160,130, 1)",
            }}
          >
            {t("classificated")}
          </span>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(30,110,85,0.3))",
            }}
          />
        </motion.div>
      </div>
    </main>
  );
}
