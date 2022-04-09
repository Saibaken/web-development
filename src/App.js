import "./stylesheets/App.css";
import React from "react";
import NewsPage from "./pages/NewsPage";
import { Routes, Route } from "react-router-dom";
import SideMenu from "./bits/SideMenu";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegPage from "./pages/RegPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegPage/>}/>
        <Route path="/news" element={<><SideMenu page="news"/><NewsPage/></>}/>
        <Route path="/chat" element={<><SideMenu page="chat"/><ChatPage/></>}/>
        <Route path="/my_profile" element={<><SideMenu page="profile"/><ProfilePage/></>}/>
      </Routes>
  );
}

export default App;
