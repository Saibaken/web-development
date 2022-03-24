import React, { useRef } from "react"

export default function MessageTextArea(props) {

  const textRef = useRef();

  const sendMessage = () => {
    let messageText = textRef.current.value;

    if (messageText != "") {
      props.setMessages([...props.messages, {
        profileName: "Profile name",
        text: messageText
      }]);

      textRef.current.value = "";
    }
  }

  return (
    <div className="message-text-area">
      <input className="text-area" type="text" ref={textRef}></input>
      <button className="send-button" onClick={sendMessage}>Send</button>
    </div>
  );
}
