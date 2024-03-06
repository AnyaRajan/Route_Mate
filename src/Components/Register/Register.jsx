import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./Register.css";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };
    
    return (
    <div className="register-body">
        <div className="register-container p-5 flex justify-around">
            <h1 className="register-title">Register</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                type="text"
                id="username"
                placeholder='Username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="register-input"
                />
                <input
                type="text"
                id="email"
                placeholder='Email-ID'
                className="register-input"
                />
                <input
                type="password"
                id="password"
                placeholder='Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="register-input"
                />

                <input
                type="password"
                id="conf-password"
                placeholder='Confirm Password'
                className="register-input"
                />
            </form>
            <div className="buttons pt-4">
                <button type="submit" className="register-button">Sign up</button>
              <Link to = "/Loginpage"><button type='button' className="back-to-login" >Login</button></Link>  
            </div>
        </div>
    </div>
  )
}

export default Register