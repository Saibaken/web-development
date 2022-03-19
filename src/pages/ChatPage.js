import "../stylesheets/Chat.css"
import React from "react"
import ChatWindow from "../bits/ChatWindow"

export default function ChatPage() {
  return (
    <div className="page-content">
      <h1 className="page-header">Chat</h1>
      <ChatWindow />
    </div>
  )
}
