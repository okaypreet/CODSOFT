import { Link } from "react-router-dom";

function JobsList() {
  const jobs =
    JSON.parse(localStorage.getItem("jobs")) || [];

  return (
    <div className="jobs-page">
      <h1>Available Jobs</h1>

      {jobs.length === 0 ? (
        <p>No Jobs Available</p>
      ) : (
        <div className="job-grid">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>

              <p>
                <strong>Company:</strong> {job.company}
              </p>

              <Link to="/job-details">
                <button className="btn">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobsList;