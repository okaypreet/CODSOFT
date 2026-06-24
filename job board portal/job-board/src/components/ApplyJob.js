import { useNavigate } from "react-router-dom";

function ApplyJob() {
  const navigate = useNavigate();

  const applyNow = () => {
    alert("Application Submitted Successfully");

    navigate("/candidate-dashboard");
  };

  return (
    <div className="form-container">
      <h2>Apply For Job</h2>

      <input placeholder="Full Name" />

      <input placeholder="Email Address" />

      <input placeholder="Phone Number" />

      <button
        className="btn"
        onClick={applyNow}
      >
        Submit Application
      </button>
    </div>
  );
}

export default ApplyJob;