"use client";

import { useState } from "react";

import QuestionCard from "@/components/QuestionCard";

import { tribeQuestions } from "@/data/tribeQuestions";
import { tribes } from "@/data/tribes";

type Scores = {
  [key: string]: number;
};

export default function TribeQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>({});
  const [finished, setFinished] = useState(false);
  const handleAnswer = (optionKey: "a" | "b" | "c" | "d") => {
    const selectedOption = tribeQuestions[currentQuestion].options[optionKey];

    const updatedScores = { ...scores };

    Object.entries(selectedOption.points).forEach(([tribeId, points]) => {
      updatedScores[tribeId] = (updatedScores[tribeId] || 0) + points;
    });

    setScores(updatedScores);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < tribeQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  const getWinningTribe = () => {
    let winner = "";
    let highestScore = -1;

    Object.entries(scores).forEach(([tribeId, score]) => {
      if (score > highestScore) {
        highestScore = score;
        winner = tribeId;
      }
    });

    return tribes.find((tribe) => tribe.id === winner);
  };

  const winningTribe = getWinningTribe();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      {!finished ? (
        <QuestionCard
          question={tribeQuestions[currentQuestion].question}
          options={tribeQuestions[currentQuestion].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="max-w-3xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={winningTribe?.image}
            alt={winningTribe?.name}
            className="w-full h-[400px] object-cover"
          />

          <div className="p-8 text-center">
            <p className="text-zinc-500 uppercase tracking-[0.3em] mb-3">
              Your Tribe Is
            </p>

            <h1 className="text-6xl font-bold mb-6">{winningTribe?.name}</h1>

            <p className="text-zinc-300 text-lg leading-relaxed">
              {winningTribe?.description}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
