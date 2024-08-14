import React, { useState } from "react";

const MathGame: React.FC = () => {
  const [score, setScore] = useState(80);
  const [timer, setTimer] = useState(7);
  const [question, setQuestion] = useState({ num1: 3, num2: 5 });
  const [options, setOptions] = useState([8, 24, 20, 15]);
  const [correctAnswer, setCorrectAnswer] = useState(15);

  const handleAnswerClick = (answer: number) => {
    if (answer === correctAnswer) {
      setScore(score + 10);
    } else {
      setScore(score - 5);
    }
    Question();
  };

  const Question = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correct = num1 * num2;
    const options = [
      correct,
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ].sort(() => 0.5 - Math.random());

    setQuestion({ num1, num2 });
    setCorrectAnswer(correct);
    setOptions(options);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mt-8 text-3xl font-semibold">
        {question.num1} × {question.num2} = ?
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {options.map((option, index) => (
          <button
            key={index}
            className="px-8 py-4 text-xl font-semibold text-white bg-amber-300 rounded shadow-md"
            onClick={() => handleAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MathGame;
