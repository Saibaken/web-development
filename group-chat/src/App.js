import "./App.css";
import React, { useState } from "react";
import NewsPage from "./pages/NewsPage";
import { Routes, Route, Link } from "react-router-dom";
import SideMenu from "./bits/SideMenu";
import ChatWindow from "./bits/ChatWindow";

function App() {
  return (
      <Routes>
        <Route path="/" element={<><SideMenu page="news"/><NewsPage/></>}/>
        <Route path="/news" element={<><SideMenu page="news"/><NewsPage/></>}/>
        <Route path="/chat" element={<><SideMenu page="chat"/><ChatWindow/></>}/>
        <Route path="/my_profile" element={<><SideMenu page="profile"/><h1>me</h1></>}/>
      </Routes>
  );
}

export default App;
