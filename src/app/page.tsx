"use client";

// External imports 
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/backgrounds/genex-home.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Blur Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-[90%] max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
      >
        <h1 className="mb-4 text-6xl font-black tracking-[0.3em] md:text-8xl">
          GENEX
        </h1>

        <p className="mb-10 text-lg text-gray-300 md:text-xl">
          Discover your tribe. Discover your character.  
          Survive the world after humanity.
        </p>

        <div className="flex flex-col gap-5 md:flex-row md:justify-center">
          <Link href="/tribe-quiz">
            <button className="w-full rounded-2xl bg-white/10 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-white/20">
              Discover Your Tribe
            </button>
          </Link>

          <Link href="/character-quiz">
            <button className="w-full rounded-2xl bg-cyan-500/20 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-cyan-500/30">
              Discover Your Character
            </button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}