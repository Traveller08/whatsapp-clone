import React from 'react';
import './App.css'
import Sidebar from './Sidebar';
import Err404 from './Err404';
import { useState } from 'react';
import {auth, onAuthStateChanged} from './firebase';
function Homepage() {
    const [showChat, setshowChat] = useState(true);
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setshowChat(true);
        }else{
            setshowChat(true);
        }
    });
    if(showChat){
        return (
            <div className='app__body'>
            <Sidebar />
            </ div>
        );
    }
    return (
       <Err404 />
    )
}

export default Homepage
