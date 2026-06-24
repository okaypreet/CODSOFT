import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import JobsList from "./components/JobsList";
import PostJob from "./components/PostJob";
import JobDetails from "./components/JobDetails";
import ApplyJob from "./components/ApplyJob";
import CandidateDashboard from "./components/CandidateDashboard";
import EmployerDashboard from "./components/EmployerDashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
