import React, { useState } from 'react'
import io from 'socket.io-client'
import Groupchat from './Groupchat'
import AdminMessage from './AdminMessage'
import {toast} from 'react-hot-toast'


const socket = io.connect('http://localhost:8000')

export default function AdminMessageEntry() {

    const [room, setRoom] = useState("")
    const [username, setUsername] = useState("")
    const [showChat, setShowChat] = useState("")
    
    const joinRoom = ()=>{
      if(room !== "" && username !== "" && room == "123"){
        socket.emit("join_room", room)
        setShowChat(true)
        toast.success('Access Granted')
      }else if(username == ""){
        toast.error('Username field cannot be empty')
      }else if(room == ""){
        toast.error('Room field cannot be empty')
      }else if(room !== "123"){
        toast.error('Invalid Room Id')
      }
    }

  return (
    <div className='groupChat'>
      {!showChat ? (
      <div className="joinChatContainer">
        <h3>Admin Message</h3>
        
        <input type="text" placeholder='Enter Name' onChange={(event)=>{
          setUsername(event.target.value)
        }}/>

        <input type="text" placeholder='Enter Room ID...' onChange={(event)=>{
          setRoom(event.target.value)
        }}/>
        <button onClick={joinRoom}>Join Room</button>
      </div>  
      ) : (
        <AdminMessage socket={socket} room={room} username={username}/>
      )}

        
      
    </div>
  )
}
