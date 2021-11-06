import React, { useState } from 'react'
import './Sign.css'
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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
function Signup() {
    const getEmail = (email) => {
        return email.split('@')[0];
    }
    const [errMess, seterrMess] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [Email, setEmail] = useState('');
    const [passWord, setpassWord] = useState('');
    const [cPassword, setcPassword] = useState('');
    const [Bday, setBday] = useState('');
    const [tAndC, settAndC] = useState(false);
    const errElement = document.getElementById('error');
    console.log("errelement " +  errElement);
    let history = useHistory();
    const handleSignup=(e)=>{
        e.preventDefault();
        if(fName=='' || lName=='' || Email=='' || passWord=='' || cPassword=='' || Bday==''){
            seterrMess(true);
            seterrorMessage("Please fill all the fields");
          
        }
        else if(passWord!==cPassword){
            seterrMess(true);
            seterrorMessage("Password and Confirm Password doesn't match");
        }
        else if(passWord.length<6){
            seterrMess(true);
            seterrorMessage("Password must be atleast 6 characters long");
        }
        else if(!tAndC){
            seterrMess(true);
            seterrorMessage("Please accept the terms and conditions");
        }
        else if(!Email.includes('@')){
            seterrMess(true);
            seterrorMessage("Please enter a valid email");
        }
        else if(!Email.includes('.com')){
            seterrMess(true);
            seterrorMessage("Please enter a valid email");
        }
        else{
            
            
            createUserWithEmailAndPassword(auth,Email,passWord)
            .then((userCredential)=>{
                console.log("userCredential " + userCredential);
                
                set(ref(database,'users/'+getEmail(Email)),{
                    fName:fName,
                    lName:lName,
                    Email:Email,
                    Bday:Bday,
                }).then(()=>{
                    console.log("user created");
                })
                .catch((error)=>{
                    console.log("error during pushing data to database" + error);
                });
                signInWithEmailAndPassword(auth,Email,passWord)
                .then((userCredential)=>{
                    history.push('/inbox');
                })
                .catch((error)=>{
                    seterrMess(true);
                    seterrorMessage(error.message);
                })
               
            })
            .catch((err)=>{
                seterrMess(true);
                seterrorMessage(err.message);
            })
           
        }
    }
    return (
        
        <>
        
             <div className="signup">
             <div className="signup-cntr">
                 <div className='close-cntr'>
                    
              <CloseIcon className='close-icon' />          
                 </div>
                 <div className="signup-header">
                     <h1>Sign Up</h1>
                 </div>

                 <div className="signup-body">
                 {errMess? 
                   (
                    <div className='signup-input signup-err'>
                    <p id='error'>{errorMessage}</p>
                    </div>
                   ):null} 
                     <form onSubmit={handleSignup}>
                         <div className="signup-input">
                             <label>First Name</label>
                             <input type="text" placeholder="First Name" value={fName} onChange={(e)=>setfName(e.target.value)} />
                         </div>
                         <div className="signup-input">
                             <label>Last Name</label>
                             <input type="text" placeholder="Last Name" value={lName} onChange={(e)=>setlName(e.target.value)} />
                         </div>
                         <div className="signup-input">
                             <label>Email</label>
                             <input type="text" placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                         </div>
                         <div className="signup-input">
                             <label>Password</label>
                             <input type="password" placeholder="Password" value={passWord} onChange={(e)=>setpassWord(e.target.value)} />
                         </div>
                         <div className="signup-input">
                             <label>Confirm Password</label>
                             <input type="password" placeholder="Confirm Password" value={cPassword} onChange={(e)=>setcPassword(e.target.value)} />
                         </div>
                 
                         <div className="signup-input">
                             <label>Birthday</label>
                             <input type="date" placeholder="Birthday" value={Bday} onChange={(e)=>setBday(e.target.value)}/>
                         </div>
                         <div className="signup-input">
                             <label>
                                 <input type="checkbox" value={tAndC} onChange={(e)=>settAndC(e.target.value)} />
                                 <span>I agree to the Terms of Service and Privacy Policy</span>
                             </label>
                         </div>
                         <div className="signup-input">
                             <button type="submit" >Sign Up</button>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
      
       

        </>                     

    )
}

export default Signup
