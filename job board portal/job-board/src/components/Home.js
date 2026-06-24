import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">

      <div className="top-auth">
        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>
      </div>

      <h1>Job Board Portal</h1>

      <p>
        Connecting Talent with Opportunity
      </p>

      <div className="hero-buttons">

        <Link to="/jobs">
          <button className="btn">
            Browse Jobs
          </button>
        </Link>

        <Link to="/post-job">
          <button className="btn">
            Post a Job
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Home;