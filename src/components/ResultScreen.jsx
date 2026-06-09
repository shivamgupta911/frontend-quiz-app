function ResultScreen({ score, totalQuestions, restartQuiz }) {
  return (
    <div>
      <h1>Quiz Finished!</h1>

      <h2>
        Score: {score}/{totalQuestions}
      </h2>

      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default ResultScreen;
