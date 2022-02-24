import React from "react";
import MessageTextArea from "./MessageTextArea";

export default function ChatWindow() {
  // const messages = [<Message />, <Message />, <Message />, <Message />];
  return (
    <>
      <div className="page-content">
        <h1 className="page-header">Chat</h1>
        <div className="chat-window">
        <input type="text"/>
        </div>
      </div>
    </>
  );
}
