import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import QuizCreate from "./components/QuizCreate";
import QuizList from "./components/QuizList";
import QuizTake from "./components/QuizTake";
import Result from "./components/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<QuizCreate />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/take" element={<QuizTake />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;