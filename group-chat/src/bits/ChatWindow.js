import React from "react";
import MessageTextArea from "./MessageTextArea";
import Message from "./Message";

export default function ChatWindow() {
  const messages = [
    <Message author="Profile Name" text="Sample text"/>,
    <Message author="Profile Name" text="Sample text"/>,
    <Message author="Profile Name" text="Sample text"/>,
    <Message author="Profile Name" text="Sample text"/>,
  ];
  return (
    <div className="chat-window">
      {messages}
      <MessageTextArea />
    </div>
  );
}
