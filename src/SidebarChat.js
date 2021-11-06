import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import db from './firebase';
function SidebarChat({id, name, onClick}) {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random()*500));
    }, []);
  
    return (
        <div className='sidebarChat' id={id} >
            <Avatar src={`https://avatars.dicebar.com/api/human/${seed}.svg`} id={id}/>
            <div className='sidebarChat__info' id={id}>
                <h2 id={id}>{name}</h2>
                <p id={id}>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat;
