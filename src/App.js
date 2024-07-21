import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 추가된 부분
import React from "react";
import "./App.css";
import Home from "./pages/home/home.js"; // 경로 수정
import Calendar from "./pages/calendar/calendar.js";
import Search from "./pages/search/search.js";
import Community from "./pages/community/community.js";
import Profile from "./pages/profile/profile.js";
import List from "./pages/list/list.js";
import Nav from "./components/nav/nav.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/search" element={<Search />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/list" element={<List />} />
          <Route path="/nav" element={<Nav />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
