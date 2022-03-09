import "../stylesheets/Chat.css";
import React from "react";

export default function Message(props) {
  return (
    <div className="message">
      <img
        className="message-profile-picture"
        src="https://via.placeholder.com/150"
        alt="profile"
      />
      <h4 className="message-author">{props.author}</h4>
      <h4 className="message-text">{props.text}</h4>
    </div>
  );
}
