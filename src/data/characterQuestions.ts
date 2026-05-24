// Internal imports
import { Question } from "@/types/question";

export const characterQuestions: Question[] = [
  {
    question: "Which feeling defines you the most deep inside?",

    options: {
      a: {
        text: "Compassion",
        points: { paulo: 2, annie: 1 },
      },

      b: {
        text: "Caution",
        points: { alex: 2 },
      },

      c: {
        text: "Determination",
        points: { lia: 2, adam: 3 },
      },

      d: {
        text: "Attachment",
        points: { amelia: 2 },
      },
    },
  },

  {
    question: "How do others usually see you?",

    options: {
      a: {
        text: "Energetic and optimistic",
        points: { annie: 2 },
      },

      b: {
        text: "Focused and intense",
        points: { lia: 2 },
      },

      c: {
        text: "Difficult to fully understand",
        points: { alex: 2, amelia: 1 },
      },

      d: {
        text: "Calm and trustworthy",
        points: { paulo: 2 },
      },
    },
  },

  {
    question: "What would hurt you the most?",

    options: {
      a: {
        text: "Depending emotionally on the wrong person",
        points: { alex: 2 },
      },

      b: {
        text: "Failing the expectations placed on me",
        points: { lia: 2, adam: 2 },
      },

      c: {
        text: "Losing my freedom",
        points: { annie: 2 },
      },

      d: {
        text: "Being betrayed by someone close",
        points: { amelia: 2 },
      },
    },
  },

  {
    question: "What kind of burden do you carry most often?",

    options: {
      a: {
        text: "Responsibility for others",
        points: { paulo: 2, annie: 1 },
      },

      b: {
        text: "Emotional attachment",
        points: { amelia: 2 },
      },

      c: {
        text: "Expectations",
        points: { lia: 2, adam: 1 },
      },

      d: {
        text: "Constant vigilance",
        points: { alex: 2 },
      },
    },
  },

  {
    question: "What is your greatest strength?",

    options: {
      a: {
        text: "My optimism and perspective",
        points: { annie: 2 },
      },

      b: {
        text: "My ability to adapt",
        points: { alex: 2 },
      },

      c: {
        text: "My discipline",
        points: { lia: 2, adam: 1 },
      },

      d: {
        text: "My loyalty to others",
        points: { amelia: 2, paulo: 1 },
      },
    },
  },

  {
    question: "How do you react under pressure?",

    options: {
      a: {
        text: "I analyze every possible outcome",
        points: { alex: 2 },
      },

      b: {
        text: "I trust my instincts and stay flexible",
        points: { annie: 1, amelia: 1 },
      },

      c: {
        text: "I stay calm for the people around me",
        points: { paulo: 2 },
      },

      d: {
        text: "I push myself even harder",
        points: { lia: 2 },
      },
    },
  },

  {
    question: "How do you usually protect yourself emotionally?",

    options: {
      a: {
        text: "By never fully depending on anyone",
        points: { alex: 2 },
      },

      b: {
        text: "By pretending everything is okay",
        points: { annie: 2, paulo: 1 },
      },

      c: {
        text: "By staying disciplined",
        points: { lia: 2, adam: 2 },
      },

      d: {
        text: "By only trusting a few people",
        points: { amelia: 2 },
      },
    },
  },

  {
    question: "What would people misunderstand about you the most?",

    options: {
      a: {
        text: "My optimism",
        points: { annie: 2, paulo: 1 },
      },

      b: {
        text: "My adaptability",
        points: { alex: 2 },
      },

      c: {
        text: "My emotional distance",
        points: { amelia: 2, alex: 1 },
      },

      d: {
        text: "My intensity",
        points: { lia: 2, adam: 3 },
      },
    },
  },

  {
    question: "What kind of mistake is hardest to forgive in yourself?",

    options: {
      a: {
        text: "Trusting the wrong person",
        points: { alex: 2 },
      },

      b: {
        text: "Causing pain without meaning to",
        points: { annie: 2, paulo: 1 },
      },

      c: {
        text: "Not being strong enough when it mattered",
        points: { adam: 3, lia: 1 },
      },

      d: {
        text: "Failing someone who trusted me",
        points: { amelia: 2, paulo: 1 },
      },
    },
  },

  {
    question: "What do you fear becoming?",

    options: {
      a: {
        text: "Someone who loses their humanity",
        points: { paulo: 2 },
      },

      b: {
        text: "Emotionally dependent",
        points: { alex: 2 },
      },

      c: {
        text: "Weak or irrelevant",
        points: { adam: 2, lia: 1 },
      },

      d: {
        text: "Completely alone",
        points: { amelia: 2 },
      },
    },
  },

  {
    question: "What kind of connection do you value most?",

    options: {
      a: {
        text: "Peaceful companionship",
        points: { paulo: 2 },
      },

      b: {
        text: "Mutual respect",
        points: { adam: 3, lia: 1 },
      },

      c: {
        text: "Emotional trust",
        points: { amelia: 2 },
      },

      d: {
        text: "Intellectual understanding",
        points: { alex: 2, annie: 1 },
      },
    },
  },

  {
    question: "What gives you peace?",

    options: {
      a: {
        text: "Feeling free and emotionally alive",
        points: { annie: 2 },
      },

      b: {
        text: "Knowing I can survive on my own",
        points: { alex: 2 },
      },

      c: {
        text: "Being surrounded by people I love",
        points: { paulo: 2, amelia: 1 },
      },

      d: {
        text: "Knowing I fulfilled my duty",
        points: { lia: 2 },
      },
    },
  },
];
