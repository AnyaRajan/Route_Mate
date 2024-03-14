import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./Forgot.css";
import Navbar from './Navbar'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
                    
        <div className="register-body">
            <div className="register-container p-5 px-14 flex justify-around">
                <h1 className="register-title">Reset Your Password</h1>
                <h5 className='font-semibold py-2'>Enter the OTP to reset your password</h5>
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
                        id="otp"
                        placeholder='Enter the OTP'
                        value={otp}
                        onChange={(event) => setOtp(event.target.value)}
                        className="register-input"
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder='New Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="register-input"
                    />
                    <input
                        type="password"
                        id="conf-password"
                        placeholder='Confirm New Password'
                        className="register-input"
                    />
                </form>
                <div className="buttons pt-4">
                    
                    <button type="submit" className="register-button">Sign up</button>
                    <Link to = "/login"><button type='button' className="back-to-login" >Login</button></Link>  
                </div>
            </div>
        </div>
    )
}

export default Register