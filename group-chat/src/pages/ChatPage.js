import React from 'react'
import SideMenu from '../bits/SideMenu'

export default function ChatPage() {
  return (
    <>
    <SideMenu page="chat"/>
    <div className='page-content'>
        <h1 className='page-header'>Chat</h1>
        <ChatWindow/>
    </div>
    </>
  )
}
