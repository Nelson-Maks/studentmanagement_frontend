import React, { useState } from 'react'
import io from 'socket.io-client'
import Groupchat from './Groupchat'
import {toast} from 'react-hot-toast'
// import { useContext } from 'react'
// import { UserContext } from '../../context/userContext'


const socket = io.connect('http://localhost:8000')

export default function Groupchatentry() {
  const [room, setRoom] = useState("")
  const [username, setUsername] = useState("")
  const [showChat, setShowChat] = useState("")
  // const {user} = useContext(UserContext)
  // const {demo} =  (!!user && (user.name))
           


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
        <h3>System Group Chat</h3>
        
        <input type="text" placeholder='Enter Name' onChange={(event)=>{
          setUsername(event.target.value)
        }}/>

        <input type="text" placeholder='Enter Room ID...' onChange={(event)=>{
          setRoom(event.target.value)
        }}/>
        <button onClick={joinRoom}>Join Room</button>
      </div>  
      ) : (
        <Groupchat socket={socket} room={room} username={username}/>
      )}

        
      
    </div>
  )
}
