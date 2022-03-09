import React from "react";
import MessageTextArea from "./MessageTextArea";
import Message from "./Message";
import { v4 } from "uuid";

export default function ChatWindow() {
  const messages = [
    {
      profileName: "Profile name",
      text: "Sample text"
    },
    {
      profileName: "Profile name",
      text: "Sample text"
    },
    {
      profileName: "Profile name",
      text: "Sample text"
    },
    {
      profileName: "Profile name",
      text: "Sample text"
    }
  ];

  return (
    <div className="chat-window">
      {messages.map(message => <Message key={v4()} author={message.profileName} text={message.text}/>)}
      <MessageTextArea />
    </div>
  );
}
