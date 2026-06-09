import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./components/ResultScreen";

function QuizContainer() {
  const questions = [
    {
      question: "What is React?",
      options: ["Library", "Database", "OS", "Browser"],
      answer: "Library",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Meta", "Amazon", "Microsoft"],
      answer: "Meta",
    },
    {
      question: "Which Hook manages state?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      answer: "useState",
    },
    {
      question: "React uses?",
      options: ["SQL", "Virtual DOM", "MongoDB", "PHP"],
      answer: "Virtual DOM",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
    }
  }, [timeLeft]);

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
    setShowResult(false);
    setTimeLeft(15);
  };
  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    setTimeLeft(15);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <ResultScreen
        score={score}
        totalQuestions={questions.length}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1>Quiz App</h1>
      <h3>Time Left: {timeLeft}</h3>

      <QuestionCard
        question={questions[currentQuestion]}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />

      <p>
        Question {currentQuestion + 1} of {questions.length}
      </p>
      <p>Selected: {selectedAnswer}</p>

      <button onClick={handleNext}>Next Question</button>
    </div>
  );
}

export default QuizContainer;
