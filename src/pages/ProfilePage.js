import "../stylesheets/Profile.css"
import React from "react"
import ProfileCard from "../bits/ProfileCard"

export default function ProfilePage() {
  return (
    <div className="page-content">
      <h1 className="page-header">My Profile</h1>
      <ProfileCard />
    </div>
  );
}
