"use client";

import { useState } from "react";
import Link from "next/link";
import { tribeQuestions } from "@/data/tribeQuestions";
import { tribes } from "@/data/tribes";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const DIVIDER = (
  <div className="flex items-center gap-3 my-1">
    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(140,110,40,0.5), transparent)",
      }}
    />
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <rect
        x="4"
        y="0"
        width="4"
        height="4"
        fill="rgba(160,130,50,1)"
        transform="rotate(45 6 6)"
      />
    </svg>
    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(140,110,40,0.7), transparent)",
      }}
    />
  </div>
);

function TribeCorners() {
  return (
    <>
      {/* Top-left */}
      <svg
        className="absolute left-0 top-0 z-20 h-16 w-16 opacity-60"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M2 32 L2 2 L32 2"
          stroke="rgba(160,130,50,0.8)"
          strokeWidth="1.5"
        />
        <path
          d="M2 16 L2 2 L16 2"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <circle cx="2" cy="2" r="2" fill="rgba(160,130,50,0.9)" />
        <path
          d="M8 2 L8 8"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M2 8 L8 8"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>
      {/* Top-right */}
      <svg
        className="absolute right-0 top-0 z-20 h-16 w-16 rotate-90 opacity-60"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M2 32 L2 2 L32 2"
          stroke="rgba(160,130,50,0.8)"
          strokeWidth="1.5"
        />
        <path
          d="M2 16 L2 2 L16 2"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <circle cx="2" cy="2" r="2" fill="rgba(160,130,50,0.9)" />
        <path
          d="M8 2 L8 8"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M2 8 L8 8"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>
      {/* Bottom-left */}
      <svg
        className="absolute bottom-0 left-0 z-20 h-16 w-16 -rotate-90 opacity-60"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M2 32 L2 2 L32 2"
          stroke="rgba(160,130,50,0.8)"
          strokeWidth="1.5"
        />
        <path
          d="M2 16 L2 2 L16 2"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <circle cx="2" cy="2" r="2" fill="rgba(160,130,50,0.9)" />
        <path
          d="M8 2 L8 8"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M2 8 L8 8"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>
      {/* Bottom-right */}
      <svg
        className="absolute bottom-0 right-0 z-20 h-16 w-16 rotate-180 opacity-60"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M2 32 L2 2 L32 2"
          stroke="rgba(160,130,50,0.8)"
          strokeWidth="1.5"
        />
        <path
          d="M2 16 L2 2 L16 2"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <circle cx="2" cy="2" r="2" fill="rgba(160,130,50,0.9)" />
        <path
          d="M8 2 L8 8"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M2 8 L8 8"
          stroke="rgba(160,130,50,0.4)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>
    </>
  );
}

export default function TribeQuizPage() {
  const t = useTranslations("TribeQuiz");
  const locale = useLocale();
  const tribesT = useTranslations("Tribes");
  const questionsT = useTranslations("TribeQuestions");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [history, setHistory] = useState<
    { scores: Record<string, number>; answer: Record<string, number> }[]
  >([]);

  const question = tribeQuestions[currentQuestion];

  function handleAnswer(points: Record<string, number>) {
    const updatedScores = { ...scores };
    for (const tribe in points) {
      updatedScores[tribe] = (updatedScores[tribe] || 0) + points[tribe];
    }
    setHistory([...history, { scores: { ...scores }, answer: points }]);
    setScores(updatedScores);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < tribeQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  }

  function handleBack() {
    if (currentQuestion === 0) return;
    const previousState = history[history.length - 1];
    if (!previousState) return;
    setScores(previousState.scores);
    setHistory(history.slice(0, -1));
    setCurrentQuestion(currentQuestion - 1);
  }

  function getWinningTribe() {
    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];
  }

  const winningTribe = tribes.find((tribe) => tribe.id === getWinningTribe());

  return (
    <main className="scanline-overlay relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
      {/* Background */}
      <div
        className="animate-slow-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/backgrounds/tribes-bg.png')" }}
      />

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(5,4,2,0.4) 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(120,90,20,0.1) 0%, transparent 60%)",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="animate-pulse-glow pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(140,110,30,0.35) 0%, rgba(100,80,20,0.08) 50%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        className="animate-pulse-glow pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(120,95,25,0.28) 0%, rgba(90,70,15,0.06) 50%, transparent 70%)",
          filter: "blur(12px)",
          animationDelay: "2s",
        }}
      />

      {/* Back button */}
      
      <Link
        href={`/${locale}`}
        className="absolute left-6 top-6 z-20 border px-5 py-3 text-sm font-semibold backdrop-blur-md transition-all duration-300"
        style={{
          fontFamily: "var(--font-cinzel)",
          fontSize: "13px",
          letterSpacing: "0.15em",
          borderColor: "rgba(160,130,50,0.6)",
          background: "rgba(10,8,2, 1)",
          color: "rgba(210,180,90,1)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background =
            "rgba(140,110,40,0.15)";
          (e.currentTarget as HTMLAnchorElement).style.borderColor =
            "rgba(180,150,60,1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background =
            "rgba(10,8,2,0.5)";
          (e.currentTarget as HTMLAnchorElement).style.borderColor =
            "rgba(160,130,50,0.4)";
        }}
      >
        ← {t("backHome")}
      </Link>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl border p-10"
        style={{
          borderColor: "rgba(140,110,40,0.28)",
          background: "rgba(8,6,2,0.7)",
          backdropFilter: "blur(12px)",
        }}
      >
        <TribeCorners />

        {!finished ? (
          <>
            {/* Progress header */}
            <div className="mb-8">
              <div className="mb-3 flex justify-between items-center">
                <span
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "16px",
                    letterSpacing: "0.2em",
                    color: "rgba(210,180,90,1)",
                  }}
                >
                  {t("question")} {currentQuestion + 1}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "16px",
                    letterSpacing: "0.15em",
                    color: "rgba(160,130,50,0.8)",
                  }}
                >
                  {tribeQuestions.length}
                </span>
              </div>

              {/* Progress bar */}
              <div
                className="h-1 w-full overflow-hidden"
                style={{ background: "rgba(140,110,40,0.3)" }}
              >
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${((currentQuestion + 1) / tribeQuestions.length) * 100}%`,
                    background:
                      "linear-gradient(to right, rgba(140,110,40,0.6), rgba(210,180,90,0.9))",
                  }}
                />
              </div>
            </div>

            {DIVIDER}

            {/* Question */}
            <h1
              className="mb-10 mt-6"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "22px",
                fontWeight: "700",
                letterSpacing: "0.05em",
                color: "rgba(230,205,140,1)",
                lineHeight: "1.5",
              }}
            >
              {questionsT(question.question)}
            </h1>

            {/* Options */}
            <div className="grid gap-4 mb-8">
              {Object.entries(question.options).map(([key, option]) => (
                <button
                  key={key}
                  onClick={() => handleAnswer(option.points)}
                  className="w-full border p-5 text-left transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "16px",
                    letterSpacing: "0.03em",
                    borderColor: "rgba(140,110,40,0.25)",
                    background: "rgba(140,110,40,0.05)",
                    color: "rgba(200,175,110,1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(140,110,40,0.15)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(180,150,60,0.7)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(140,110,40,0.05)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(140,110,40,0.25)";
                  }}
                >
                  <span
                    className="mr-3 font-bold uppercase"
                    style={{ color: "rgba(210,180,90,1)", fontSize: "17px" }}
                  >
                    {key}.
                  </span>
                  {questionsT(option.text)}
                </button>
              ))}
            </div>

            {DIVIDER}

            {/* Back button */}
            <div className="mt-6">
              <button
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="border px-5 py-2 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "14px",
                  letterSpacing: "0.15em",
                  borderColor: "rgba(140,110,40,0.4)",
                  background: "transparent",
                  color: "rgba(210,180,90,1)",
                }}
                onMouseEnter={(e) => {
                  if (currentQuestion !== 0)
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(140,110,40,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                ← {t("back")}
              </button>
            </div>
          </>
        ) : (
          /* Result screen */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Top line */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(140,110,40,0.6))",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "16px",
                  letterSpacing: "0.4em",
                  color: "rgba(210,180,90,1)",
                }}
              >
                {t("yourTribe")}
              </span>
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to left, transparent, rgba(140,110,40,0.6))",
                }}
              />
            </div>

            {/* Tribe name */}
            <h1
              className="mb-6"
              style={{
                fontFamily: "var(--font-cinzel-deco)",
                fontSize: "clamp(40px, 8vw, 72px)",
                fontWeight: "900",
                letterSpacing: "0.2em",
                color: "transparent",
                background:
                  "linear-gradient(180deg, #e8ddb0 0%, #c8a840 30%, #a07820 60%, #c8a840 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(140,110,30,0.5))",
              }}
            >
              {winningTribe?.name}
            </h1>

            {DIVIDER}

            <img
              src={winningTribe?.image}
              alt={winningTribe?.name}
              className="mx-auto my-8 max-h-[420px] w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 30px rgba(140,110,30,0.3))" }}
            />

            {DIVIDER}

            <p
              className="mx-auto max-w-2xl mt-6 leading-relaxed"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "16px",
                color: "rgba(200,175,110,1)",
                letterSpacing: "0.03em",
                lineHeight: "1.9",
              }}
            >
              {winningTribe && tribesT(winningTribe.description)}
            </p>

            {/* Restart */}
            <button
              onClick={() => window.location.reload()}
              className="mt-10 border px-8 py-4 transition-all duration-300"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "16px",
                letterSpacing: "0.2em",
                borderColor: "rgba(160,130,50,0.5)",
                background: "rgba(140,110,40,0.08)",
                color: "rgba(210,180,90,1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(140,110,40,0.2)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(200,165,60,0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(140,110,40,0.08)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(160,130,50,0.5)";
              }}
            >
              ↺ {t("restartQuiz")}
            </button>

            {/* Bottom line */}
            <div className="flex items-center gap-4 mt-10">
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(140,110,40,0.3))",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "13px",
                  letterSpacing: "0.5em",
                  color: "rgba(160,130,50,0.7)",
                }}
              >
                {t("classificated")}
              </span>
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to left, transparent, rgba(140,110,40,0.3))",
                }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
