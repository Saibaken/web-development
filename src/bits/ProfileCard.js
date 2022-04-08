import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCard() {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("userName"));

  const onLogOut = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div className="profile-window">
      <div className="profile-info">
        <div className="profile-picture">
          <img
            src="https://via.placeholder.com/300x300"
            alt="profile"
            className="profile-picture"
          />
        </div>
        <h3 className="profile-name">{userName}</h3>

      </div>
      <button className="log-out-button" onClick={onLogOut}>
        Log Out
      </button>
    </div>
  );
}
