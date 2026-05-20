type OptionKey = "a" | "b" | "c" | "d";

interface Props {
  question: string;

  options: {
    a: { text: string };
    b: { text: string };
    c: { text: string };
    d: { text: string };
  };

  onAnswer: (option: OptionKey) => void;
}

export default function QuestionCard({ question, options, onAnswer }: Props) {
  return (
    <div className="bg-zinc-900 p-8 rounded-2xl max-w-2xl w-full">
      <h2 className="text-2xl font-bold mb-8">{question}</h2>

      <div className="grid gap-4">
        {(Object.entries(options) as [OptionKey, { text: string }][]).map(
          ([key, option]) => (
            <button
              key={key}
              onClick={() => onAnswer(key)}
              className="border border-zinc-700 p-4 rounded-xl text-left hover:bg-zinc-800 transition"
            >
              <span className="font-bold uppercase mr-2">{key}</span>

              {option.text}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
