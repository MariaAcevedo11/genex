"use client";

import { useState } from "react";

import { characterQuestions } from "@/data/characterQuestions";
import { characters } from "@/data/characters";

export default function CharacterQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [scores, setScores] = useState<Record<string, number>>({});

  const [finished, setFinished] = useState(false);

  const question = characterQuestions[currentQuestion];

  function handleAnswer(points: Record<string, number>) {
    const updatedScores = { ...scores };

    for (const character in points) {
      updatedScores[character] =
        (updatedScores[character] || 0) + points[character];
    }

    setScores(updatedScores);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < characterQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  }

  function getWinningCharacter() {
    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];
  }

  const winningCharacter = characters.find(
    (character) => character.id === getWinningCharacter()
  );

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/backgrounds/characters-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Glows */}
      <div className="absolute left-20 top-20 h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-cyan-400/10 bg-white/5 p-8 backdrop-blur-xl">

        {!finished ? (
          <>
            {/* Progress */}
            <div className="mb-8">
              <div className="mb-2 flex justify-between text-sm text-gray-400">
                <span>
                  Question {currentQuestion + 1}
                </span>

                <span>
                  {characterQuestions.length}
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-cyan-400 transition-all duration-500"
                  style={{
                    width: `${
                      ((currentQuestion + 1) /
                        characterQuestions.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <h1 className="mb-10 text-3xl font-bold text-white">
              {question.question}
            </h1>

            {/* Answers */}
            <div className="grid gap-5">
              {Object.entries(question.options).map(
                ([key, option]) => (
                  <button
                    key={key}
                    onClick={() =>
                      handleAnswer(option.points)
                    }
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-lg transition duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-400/10"
                  >
                    <span className="mr-3 font-bold uppercase text-cyan-300">
                      {key}
                    </span>

                    {option.text}
                  </button>
                )
              )}
            </div>
          </>
        ) : (
          <div className="text-center">

            <p className="mb-4 text-gray-400">
              Your character is
            </p>

            <h1 className="mb-6 text-6xl font-black tracking-[0.2em]">
              {winningCharacter?.name}
            </h1>

            <img
              src={winningCharacter?.image}
              alt={winningCharacter?.name}
              className="mx-auto mb-8 h-80 w-full max-w-md rounded-3xl object-cover"
            />

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
              {winningCharacter?.description}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-10 rounded-2xl bg-cyan-500/20 px-8 py-4 font-semibold transition hover:bg-cyan-500/30"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </main>
  );
}