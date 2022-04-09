import React, { useRef } from "react";

export default function MessageTextArea(props) {
  const textRef = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    let messageText = textRef.current.value;
    let userName = localStorage.getItem("userName").split('"').join("");

    if (messageText !== "") {
      textRef.current.value = "";
      props.updateMessages();
      fetch("/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          messageBody: messageText,
        }),
      });
    }
  };

  return (
    <form className="message-text-area" onSubmit={sendMessage}>
      <input className="text-area" type="text" ref={textRef}></input>
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </form>
  );
}
