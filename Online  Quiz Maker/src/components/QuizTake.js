import { useEffect, useState } from "react";
import "../App.css";

function QuizTake() {
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    const savedQuiz = JSON.parse(
      localStorage.getItem("selectedQuiz")
    );

    setQuiz(savedQuiz);
  }, []);

  const submitQuiz = () => {
    if (!selectedAnswer) {
      alert("Please select an answer");
      return;
    }

    const score =
      selectedAnswer === quiz.correctAnswer ? 1 : 0;

    localStorage.setItem("score", score);

    window.location.href = "/result";
  };

  if (!quiz) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <div className="card">
        <h2>{quiz.question}</h2>

        {quiz.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={(e) =>
                  setSelectedAnswer(e.target.value)
                }
              />
              {" "}{option}
            </label>
          </div>
        ))}

        <button
          className="btn"
          onClick={submitQuiz}
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizTake;