import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function MessageTextArea(props) {
  const textRef = useRef();
  const { t }  = useTranslation('pages');

  const sendMessage = async (e) => {
    e.preventDefault();
    let messageText = textRef.current.value;
    let userName = localStorage.getItem("userName").split('"').join("");

    if (messageText !== "") {
      textRef.current.value = "";

      await fetch("/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          messageBody: messageText,
        }),
      });

      await props.updateMessages();
    }
  };

  return (
    <form className="message-text-area" onSubmit={sendMessage}>
      <input className="text-area" type="text" ref={textRef}></input>
      <button className="send-button" onClick={sendMessage}>
        {t("chat.send")}
      </button>
    </form>
  );
}
