import { useEffect, useState } from "react";
import "../App.css";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const savedQuizzes =
      JSON.parse(localStorage.getItem("quizzes")) || [];

    setQuizzes(savedQuizzes);
  }, []);

  const deleteQuiz = (indexToDelete) => {
    if (!window.confirm("Delete this quiz?")) return;

    const updatedQuizzes = quizzes.filter(
      (_, index) => index !== indexToDelete
    );

    setQuizzes(updatedQuizzes);

    localStorage.setItem(
      "quizzes",
      JSON.stringify(updatedQuizzes)
    );
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Available Quizzes</h2>

        {quizzes.length === 0 ? (
          <p>No Quiz Available</p>
        ) : (
          quizzes.map((quiz, index) => (
            <div
              key={index}
              className="quiz-card"
              onClick={() => {
                localStorage.setItem(
                  "selectedQuiz",
                  JSON.stringify(quiz)
                );

                window.location.href = "/take";
              }}
            >
              <h3>{quiz.question}</h3>

              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteQuiz(index);
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default QuizList;