import "../stylesheets/Chat.css"
import React, { useEffect, useState } from "react";
import ChatWindow from "../bits/ChatWindow";
import { useTranslation } from "react-i18next";

export default function ChatPage() {
  const [id, setId] = useState(JSON.parse(localStorage.getItem("id")));
  const { t } = useTranslation('pages');
  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")));
  }, []);

  if (id !== null)
    return (
      <div className="page-content">
        <h1 className="page-header">{t("chat.chat_header")}</h1>
        <ChatWindow />
      </div>
    );
  else
    return (<h1>Go away</h1>);
}
