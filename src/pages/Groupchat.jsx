import React, { useEffect, useState } from 'react'
import ScrolltoBottom from 'react-scroll-to-bottom'
// import { useContext } from 'react'
// import { UserContext } from '../../context/userContext'

export default function Groupchat({socket, room, username}) {


    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])
    // const {user} = useContext(UserContext)
    const sendMessage = async ()=>{

        if(currentMessage !== ""){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + 
                ":" + 
                new Date(Date.now()).getMinutes() 
            };

            await socket.emit("send_message", messageData)
            setMessageList((list)=>[...list, messageData])
            setCurrentMessage("")

        }
    };

    socket.on("recieve_message", (data) =>{
        let newMessageList = [...messageList];
        newMessageList.push(data);
        setMessageList(newMessageList);
    })
    // useEffect(()=>{
 
    // },[socket]);


  return (
    <div className='chat-window'>
      
            <div className='chat-header'>
                <p>Chat Room</p>

            </div>

            <div className='chat-body'>
                <ScrolltoBottom className='message-container'>
                    {/* {messageList} */}
                {messageList.map((messageContent, idx)=>{
                    return (
                        <div className='message' key={idx} id={username === messageContent.author ? "you" : "other"}>
                            <div>
                                <div className="message-content">
                                    <p>{messageContent.message}</p>

                                </div>

                                <div className="message-meta">
                                    <p id='time'>{messageContent.time}</p>
                                    <p id='author'>{messageContent.author}</p>
                                    {/* <p id='author'>{!!user && (<h3>{user.name}</h3>)}</p> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
                </ScrolltoBottom>

            </div>

            <div className='chat-footer'>
                <input type="text" placeholder='Hey...' onChange={(event)=>{setCurrentMessage(event.target.value)}} value={currentMessage}/>
                <button onClick={sendMessage}>&#9658;</button>

            </div>

    </div>
  )
}