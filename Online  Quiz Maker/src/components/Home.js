import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="container">
      <div className="card">

        <div className="logo">🎯</div>

        <h1 className="title">QuizNest</h1>

        <p className="subtitle">
          Learn • Practice • Test
        </p>

        <div className="home-buttons">
          <Link to="/create">
            <button className="btn">
              Create Quiz
            </button>
          </Link>

          <Link to="/quizzes">
            <button className="btn">
              Take Quiz
            </button>
          </Link>
        </div>

        <div className="creator">
          <p>
            Developed by Preet jain
            <br />
            Sage university Bhopal  
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;

