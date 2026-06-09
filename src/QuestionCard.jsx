function QuestionCard({ question, selectedAnswer, setSelectedAnswer }) {
  return (
    <>
      <h2>{question.question}</h2>

      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => setSelectedAnswer(option)}
          style={{
            margin: "8px",
            backgroundColor: selectedAnswer === option ? "green" : "",
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default QuestionCard;
