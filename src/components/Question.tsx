interface QuestionProps {
  question: string;
  answer: string;
}

export default function Question({ question, answer }: QuestionProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="font-bold text-lg mb-2">{question}</h3>
      <p>{answer}</p>
    </div>
  );
}
