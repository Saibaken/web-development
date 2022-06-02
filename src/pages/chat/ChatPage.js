import "../../stylesheets/Chat.css";
import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Message from "./Message";
import MessageForm from "./MessageForm";
import { v4 } from "uuid";
import SideMenu from "../sidemenu/SideMenu";

export default function ChatPage() {
  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")));

  const { t } = useTranslation("pages");

  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
  }, []);

  const messagesRef = useRef();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "api/v1/messaging/getMessages")
      .then((response) => response.json())
      .then((messages) => setMessages(messages));
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, []);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  });

  const updateMessages = async () => {
    await fetch(process.env.REACT_APP_API_URL + "api/v1/messaging/getMessages")
      .then((response) => response.json())
      .then((messages) => setMessages(messages));
  };

  if (id !== null)
    return (
      <>
        <SideMenu page="chat" />
        <div className="page-content">
          <h1 className="page-header">{t("chat.chat_header")}</h1>
          <div className="chat-window">
            <div className="messages" ref={messagesRef}>
              {messages.map((message) => (
                <Message
                  key={v4()}
                  author={message.userName}
                  text={message.text}
                />
              ))}
            </div>
            <MessageForm
              messages={messages}
              updateMessages={updateMessages}
            />
          </div>
        </div>
      </>
    );
  else return <h1>Go away</h1>;
}
