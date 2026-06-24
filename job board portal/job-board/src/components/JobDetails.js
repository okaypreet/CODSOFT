import { Link } from "react-router-dom";

function JobDetails() {
  return (
    <div className="details-page">
      <div className="details-card">
        <h1>Backend Developer</h1>

        <p>
          <strong>Company:</strong> Infosys
        </p>

        <p>
          <strong>Location:</strong> Bangalore
        </p>

        <p>
          <strong>Salary:</strong> ₹8 LPA
        </p>

        <p>
          Looking for React, Node.js and MongoDB developers.
        </p>

        <Link to="/apply">
          <button className="apply-btn">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JobDetails;