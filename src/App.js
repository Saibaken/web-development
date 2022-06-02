import "./stylesheets/App.css";
import React from "react";
import NewsPage from "./pages/news/NewsPage";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./pages/chat/ChatPage";
import ProfilePage from "./pages/profile/ProfilePage";
import LoginPage from "./pages/login/LoginPage";
import RegPage from "./pages/registration/RegPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegPage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/chat" element={<ChatPage/>}/>
        <Route path="/my_profile" element={<ProfilePage/>}/>
      </Routes>
  );
}

export default App;
