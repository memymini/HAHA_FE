import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 추가된 부분
import React from "react";
import "./App.css";
import Home from "./pages/home/home.js"; // 경로 수정

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
