"use client";

import { useState } from "react";

import QuestionCard from "@/components/QuestionCard";

import { characterQuestions } from "@/data/characterQuestions";
import { characters } from "@/data/characters";

type Scores = {
  [key: string]: number;
};

export default function CharacterQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>({});
  const [finished, setFinished] = useState(false);
  const handleAnswer = (optionKey: "a" | "b" | "c" | "d") => {
    const selectedOption = characterQuestions[currentQuestion].options[optionKey];

    const updatedScores = { ...scores };

    Object.entries(selectedOption.points).forEach(([characterId, points]) => {
      updatedScores[characterId] = (updatedScores[characterId] || 0) + points;
    });

    setScores(updatedScores);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < characterQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  const getWinningCharacter = () => {
    let winner = "";
    let highestScore = -1;

    Object.entries(scores).forEach(([characterId, score]) => {
      if (score > highestScore) {
        highestScore = score;
        winner = characterId;
      }
    });

    return characters.find((character) => character.id === winner);
  };

  const winningCharacter = getWinningCharacter();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      {!finished ? (
        <QuestionCard
          question={characterQuestions[currentQuestion].question}
          options={characterQuestions[currentQuestion].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="max-w-3xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={winningCharacter?.image}
            alt={winningCharacter?.name}
            className="w-full h-[400px] object-cover"
          />

          <div className="p-8 text-center">
            <p className="text-zinc-500 uppercase tracking-[0.3em] mb-3">
              Your Character Is
            </p>

            <h1 className="text-6xl font-bold mb-6">{winningCharacter?.name}</h1>

            <p className="text-zinc-300 text-lg leading-relaxed">
              {winningCharacter?.description}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
