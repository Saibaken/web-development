import React, { useEffect, useRef, useState } from "react";
import MessageTextArea from "./MessageTextArea";
import Message from "./Message";
import { v4 } from "uuid";

export default function ChatWindow() {
  const messagesRef = useRef();
  const [messages, setMessages] = useState([
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
  ]);

  useEffect(() => {
    setMessages(JSON.parse(localStorage.getItem("messages")));
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  });

  return (
    <div className="chat-window">
      <div className="messages" ref={messagesRef}>
        {messages.map(message => <Message key={v4()} author={message.profileName} text={message.text} />)}
      </div>
      <MessageTextArea messages={messages} setMessages={setMessages} />
    </div>
  );
}
