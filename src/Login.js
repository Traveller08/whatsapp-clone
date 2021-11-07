import { Link } from '@mui/material';
import React, { useState } from 'react'
import './Login.css';
import  {signInWithEmailAndPassword, auth} from './firebase';
import { useHistory } from 'react-router-dom';
function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [err, seterr] = useState(false);
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
       const Email = email;
       const Password = password;
       signInWithEmailAndPassword(auth,Email, Password)
       .then((userCredential) => {
           history.push('/inbox');
       })
       .catch((error) => {
           seterr(true);
           document.getElementsByClassName('err')[0].innerHTML = error.message;
       })
    }
    
    return (
        <div className='login-cntr'>
            <div className='login-form'>
                <div className='login-form-header'>
                    <h1>Login</h1>
                </div>
                <div className='login-form-body'>
                   {err? 
                   (
                    <div className='login-form-body-input login-form-err'>
                    <p className='err'></p>
                    </div>
                   ):null} 
                    <form onSubmit={handleSubmit}>
                    <div className='login-form-body-input'>
                        <input type='text' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Username' />
                    </div>
                    <div className='login-form-body-input'>
                        <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' />
                    </div>
                    <div className='login-form-body-input btn-cntr'>
                        <button  id='btn3' type='submit'>Login</button>
                    </div>
                    <div className='link login-form-body-input'>
                        Forgot your password? Click 
                        <Link className='link1' to='/forgotpassword'> here </Link>
                        to reset.
                        </div>
                </form>
            </div>
          </div>
        </div>
    );
}

export default Login;