import React, { useEffect, useRef, useState } from "react";
import MessageTextArea from "./MessageTextArea";
import Message from "./Message";
import { v4 } from "uuid";

export default function ChatWindow() {
  const messagesRef = useRef();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("messages/getMessages")
      .then((response) => response.json())
      .then((messages) => setMessages(messages));
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, []);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  });

  const updateMessages = async () => {
    await fetch("messages/getMessages")
      .then((response) => response.json())
      .then((messages) => setMessages(messages));
  };

  return (
    <div className="chat-window">
      <div className="messages" ref={messagesRef}>
        {messages.map((message) => (
          <Message key={v4()} author={message.userName} text={message.text} />
        ))}
      </div>
      <MessageTextArea messages={messages} updateMessages={updateMessages} />
    </div>
  );
}
