import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AsyncStorage from '@react-native-async-storage/async-storage';
import "./App.css";
import Home from "./pages/home/home.js";
import Calendar from "./pages/calendar/calendar.js";
import Search from "./pages/search/search.js";
import Community from "./pages/community/community.js";
import Profile from "./pages/profile/profile.js";
import List from "./pages/list/list.js";
import Nav from "./components/nav/nav.js";
import Login from "./pages/login/login.js";
import Signup from "./pages/signup/signup.js";
import Description from "./pages/description/description.js";
import ProfileUpdate from "./pages/profileUpdate/profileUpdate.js";
import Init_A from "./pages/init/init_A.js";
import Init_B from "./pages/init/init_B.js";

const AppRoutes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkMemberId = async () => {
      try {
        const memberId = await AsyncStorage.getItem('memberId');
        if (memberId) {
          navigate('/home'); // `memberId`가 있을 경우 홈 페이지로 이동
        } else {
          navigate('/init_B'); // `memberId`가 없을 경우 Init_B 페이지로 이동
        }
      } catch (error) {
        console.error('AsyncStorage 접근 실패:', error);
        navigate('/init_B'); // 오류 발생 시 Init_B로 이동
      } finally {
        setLoading(false);
      }
    };

    checkMemberId();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/search" element={<Search />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<List />} />
        <Route path="/init_A" element={<Init_A />} />
        <Route path="/init_B" element={<Init_B />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/description" element={<Description />} />
        <Route path="/profileUpdate" element={<ProfileUpdate />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
