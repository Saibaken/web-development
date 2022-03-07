import React from "react";

export default function ProfileCard() {
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
        <h3 className="profile-name">Profile Name</h3>

      </div>
      <button className="log-out-button">
        Log Out
      </button>
    </div>
  );
}
