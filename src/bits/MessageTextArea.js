import React, { useRef } from "react";
import { sendMessageNotification } from "../BotNotify";

export default function MessageTextArea(props) {

  const textRef = useRef();

  const sendMessage = () => {
    let messageText = textRef.current.value;
    let profileName = "Profile name";

    if (messageText !== "") {
      props.setMessages([...props.messages, {
        profileName: profileName,
        text: messageText
      }]);

      textRef.current.value = "";

      sendMessageNotification(profileName, messageText);
    }
  }

  return (
    <form className="message-text-area" onSubmit={sendMessage}>
      <input className="text-area" type="text" ref={textRef}></input>
      <button className="send-button" onClick={sendMessage}>Send</button>
    </form>
  );
}
