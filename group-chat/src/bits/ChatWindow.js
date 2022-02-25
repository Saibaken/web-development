import React from "react";
import MessageTextArea from "./MessageTextArea";

export default function ChatWindow() {
  // const messages = [<Message />, <Message />, <Message />, <Message />];
  return (
        <div className="chat-window">
        <MessageTextArea/>
        </div>
  );
}
