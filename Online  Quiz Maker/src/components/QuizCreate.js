import { useState } from "react";
import "../App.css";

function QuizCreate() {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const saveQuiz = () => {
    if (
  !question ||
  !option1 ||
  !option2 ||
  !option3 ||
  !option4 ||
  !correctAnswer
) {
  alert("Please fill all fields");
  return;
}
   const newQuiz = {
  question,
  options: [option1, option2, option3, option4],
  correctAnswer,
};

    const existing =
      JSON.parse(localStorage.getItem("quizzes")) || [];

    existing.push(newQuiz);

    localStorage.setItem(
      "quizzes",
      JSON.stringify(existing)
    );

    alert("Quiz Saved Successfully!");

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create New Quiz</h2>

        <input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option 1"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option 2"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option 3"
          value={option3}
          onChange={(e) => setOption3(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option 4"
          value={option4}
          onChange={(e) => setOption4(e.target.value)}
        />
        <select
  value={correctAnswer}
  onChange={(e) => setCorrectAnswer(e.target.value)}
>
  <option value="">Select Correct Answer</option>
  <option value={option1}>{option1}</option>
  <option value={option2}>{option2}</option>
  <option value={option3}>{option3}</option>
  <option value={option4}>{option4}</option>
</select>

        <button
          className="btn"
          onClick={saveQuiz}
        >
          Save Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizCreate;