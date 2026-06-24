import { useState } from "react";

function PostJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const saveJob = () => {
    if (!title || !company) {
      alert("Please fill all fields");
      return;
    }

    const jobs =
      JSON.parse(localStorage.getItem("jobs")) || [];

    jobs.push({
      title,
      company,
    });

    localStorage.setItem(
      "jobs",
      JSON.stringify(jobs)
    );

    alert("Job Posted Successfully");

    setTitle("");
    setCompany("");
  };

  return (
    <div className="form-container">

      <div className="form-card">

        <h2>Post New Job</h2>

        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
        />

        <button
          className="btn"
          onClick={saveJob}
        >
          Post Job
        </button>

      </div>

    </div>
  );
}

export default PostJob;