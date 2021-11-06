import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import Chat from './Chat';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {createUserWithEmailAndPassword,
    auth, 
    signInWithEmailAndPassword,
    database, 
    child, 
    onValue, 
    set, 
    ref, 
    provider, 
    onAuthStateChanged
   } from './firebase';
const Sidebar = () => {
    const [uName, setuName] = useState('unknown');
    const [rooms, setRooms] = useState([]);
    const [email, setemail] = useState('');
    const [Id, setId] = useState('');
    const [chatName, setchatName] = useState('');
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random()*500));
    }, []);
    useEffect(() => {
    
        const sideChatref=ref(database,`users/${email}/friends`);
       onValue(sideChatref,(snapshot)=>{
              const data=snapshot.val();  
              const newData=[];
              for(let key in data){
                  const obj={
                      id:key,
                      name:data[key].Name,
                  }  
                newData.push(obj);
              }
              setRooms(newData);
       });
        
    }, [email]);
    useEffect(() => {

    } , [Id]);
    const getEmail = (email) => {
        return email.split('@')[0];
    }
    
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uEmail = user.email;
          setemail(getEmail(uEmail));
          const userRef = ref(database, 'users/' + getEmail(uEmail));
            onValue(userRef, (snapshot) => {
            const data = snapshot.val();
        //    console.log("user data "+ data);
            setuName(data.fName + " " + data.lName);
            });
        } 
      });
      
      
    
    return (
        <>
        <div className='sidebar'>
           <div className='sidebar__header'>
               <div className='sidebar_headerLeft'>
                     <Avatar src='https://robohash.org/a28312c5f329ecdef0ec87cb823b5eb9?set=set4&bgset=&size=400x400' />
               <p className='name'>{uName}</p>
             </div>
                
                <div className='sidebar__headerRight'>
                            
                 <IconButton>
                 <DonutLargeIcon />
                </IconButton>
                <IconButton>
                 <ChatIcon />
                </IconButton>
                <IconButton>
                 <MoreVertIcon />
                </IconButton>
                </div>
            
           </div>

           <div className='sidebar__search'>
               <div className='sidebar__searchContainer'>
                   <SearchIcon />
                   <input placeholder='Search or start a new chat' type='text'></input>
               </div>
           </div>
            
            <div className='sidebar__chats'>
                {
                  rooms.map((room)=>{
                      return (
                    //   <SidebarChat key={room.id} id={room.id} name={room.name} onclick={()=>{setId(room.id);console.log('clicked');setchatName(room.name)}}/>
                      <div className='sidebarChat' id={room.id} onClick={()=>{setId(room.id);setchatName(room.name);}}>
                      <Avatar src={`https://avatars.dicebar.com/api/human/${seed}.svg`} />
                      <div className='sidebarChat__info' >
                          <h2 >{room.name}</h2>
                          <p >This is the last message</p>
                      </div>
                      </div>
                      ) 
                  })
                }
            </div>
        </div>
         {
                Id && <Chat Id={Id} chatName={chatName} userId={getEmail(email)} currName={uName} />
         }

        </>
    )
}

export default Sidebar;
