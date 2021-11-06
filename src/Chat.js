import MoreVert from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import './Chat.css';
import SendIcon from '@mui/icons-material/Send';
import {
    database, 
    child, 
    onValue, 
    set, 
    ref, 
    provider, 
    onAuthStateChanged,
    push
   } from './firebase';


function Chat({Id, chatName, userId, currName}) {
   
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState(''); 
    const sendMessage = (e) => {
        e.preventDefault();
        if(message.trim()){
            const refSender = ref(database,`users/${userId}/friends/${Id}/chats/`);
            const refReceiver = ref(database,`users/${Id}/friends/${userId}/chats/`);
            var messdata={
                message: message,
                sender: userId,
                time: Date.now()
            }
            push(refSender,messdata);
            push(refReceiver,messdata);
        }
        setMessage('');
    }
    useEffect(() => {
        const messRef=ref(database,`users/${userId}/friends/${Id}/chats/`);
        const messData=[];     
        onValue(messRef, (snap) => {
           snap.forEach((child) => {
                messData.push(child.val());
           })
        });
        setMessages(messData);
    } , [Id, userId]);
            return (
                <div className='chat'>
                <div className='chat__header'>
                    <Avatar />
                    <div className='chat__headerInfo'>
                        <h3>{chatName}</h3>
                        <p>last seen at ...</p>
                    </div>
                    <div className='chat__headerRight'>
                 
                      <IconButton>
                     <SearchIcon />
                     </IconButton>
                     <IconButton>
                      <AttachFileIcon />
                     </IconButton>
                     <IconButton>
                      <MoreVert />
                     </IconButton>
                     </div>
                </div>
                <div className='chat__body'>
                    {
                      
                        messages.map((mess) =>{
                          console.log(mess.message);
                            return (
                                mess==null?null:(
                             <ChatMessage 
                                recieverName={currName}
                                senderName={chatName}
                                mesg={mess.message}
                                time={mess.time}
                                isSender={mess.sender===userId}
                              />)
                            )
                        })
                    }
                
                </div>
                <div className='chat__footer'>
                    <IconButton>
                   <InsertEmoticonIcon />
                   </IconButton>
                   <form onSubmit={sendMessage}>
                       <input
                          placeholder='Type a message'
                          type='text'
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                       >
                       </input>
                       <button type='submit'>
                            <IconButton className='btnn'>
                               <SendIcon />
                           </IconButton>
                       </button>
                   </form>
                   <IconButton>
                   <MicIcon />
                   </IconButton>
                </div>
             </div>
            );
        }
        
      
    


export default Chat;
