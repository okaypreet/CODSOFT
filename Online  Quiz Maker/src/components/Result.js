import { useEffect, useState } from "react";
import "../App.css";

function Result() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore =
      localStorage.getItem("score") || 0;

    setScore(savedScore);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Quiz Result</h1>

        <h2>Your Score: {score}/1</h2>

        <button
          className="btn"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
}

export default Result;