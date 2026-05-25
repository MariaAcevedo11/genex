"use client";

import { useState } from "react";

import Link from "next/link";
import { tribeQuestions } from "@/data/tribeQuestions";
import { tribes } from "@/data/tribes";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function TribeQuizPage() {
  const t = useTranslations("TribeQuiz");
  const locale = useLocale();
  const questionsT = useTranslations("TribeQuestions");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [history, setHistory] = useState<
    {
      scores: Record<string, number>;
      answer: Record<string, number>;
    }[]
  >([]);

  const question = tribeQuestions[currentQuestion];

  function handleAnswer(points: Record<string, number>) {
    const updatedScores = { ...scores };

    for (const tribe in points) {
      updatedScores[tribe] = (updatedScores[tribe] || 0) + points[tribe];
    }

    setHistory([
      ...history,
      {
        scores: { ...scores },
        answer: points,
      },
    ]);

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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/backgrounds/tribes-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-green-500/10 blur-3xl" />

      <Link
        href={`/${locale}`}
        className="absolute left-6 top-6 z-20 rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
      >
        ← {t("backHome")}
      </Link>

      {/* Quiz Card */}
      <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        {!finished ? (
          <>
            {/* Progress */}
            <div className="mb-8">
              <div className="mb-2 flex justify-between text-sm text-gray-400">
                <span>
                  {t("question")} {currentQuestion + 1}
                </span>

                <span>{tribeQuestions.length}</span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-green-400 transition-all duration-500"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / tribeQuestions.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <h1 className="mb-10 text-3xl font-bold text-white">
              {questionsT(question.question)}
            </h1>

            <div className="mb-6 flex justify-between">
              <button
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← {t("back")}
              </button>
            </div>

            {/* Options */}
            <div className="grid gap-5">
              {Object.entries(question.options).map(([key, option]) => (
                <button
                  key={key}
                  onClick={() => handleAnswer(option.points)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-lg transition duration-300 hover:scale-[1.02] hover:bg-white/10"
                >
                  <span className="mr-3 font-bold uppercase text-green-300">
                    {key}
                  </span>

                  {questionsT(option.text)}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="mb-4 text-gray-400">{t("yourTribe")}</p>

            <h1 className="mb-6 text-6xl font-black tracking-[0.2em]">
              {winningTribe?.name}
            </h1>

            <img
              src={winningTribe?.image}
              alt={winningTribe?.name}
              className="mx-auto mb-8 max-h-[500px] w-auto rounded-3xl object-contain"
            />

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
              {winningTribe?.description}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-10 rounded-2xl bg-green-500/20 px-8 py-4 font-semibold transition hover:bg-green-500/30"
            >
              {t("restartQuiz")}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
