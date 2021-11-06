import React, { useState } from 'react';
import './Signup.css'
import logo from './WhatsApp.svg.png'
import { Link } from 'react-router-dom';
import { NoEncryption } from '@mui/icons-material';
import Signup from './Signup';
import Login from './Login';
function NoLoginHome() {
     const [signUp, setsignUp] = useState(false);
     const [logIn, setlogIn] = useState(false);
     const signup =()=>{
         if(signUp){
                setsignUp(false);
         }else{
                setsignUp(true);
         }
     }
     const login = ()=>{
         if(logIn){
                setlogIn(false);
         }else{
                setlogIn(true);
         }
     }
    return (
        <>
        {signUp ?<Signup/> : null}
        {logIn ?<Login/> : null}
        <div className='cntr'>
            <div className="signup-container">
               <img src={logo} className='logo' alt='logo'></img>
               <h3>Continue to whatsapp</h3>
               <div className='btn-cntr'>
               <button className='btn btn2' onClick={signup}>Sign up</button>
               <button className='btn1 btn' onClick={login}>Login</button>
               </div>
              
            </div>
        </div>
        </>
    )
}

export default NoLoginHome;
