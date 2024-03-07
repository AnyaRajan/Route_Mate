import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./Sendotp.css";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="fucked">
            <div className="register-container p-5 flex justify-around">
                <h1 className="fucked-title">Reset Your Password</h1>
                <h5>Enter your registered Username to reset your password</h5>
                <form onSubmit={handleSubmit} className="fucked-register-form">
                    <input
                        type="text"
                        id="username"
                        placeholder='Username'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="register-input"
                    />
                   
                   
                </form>
                <div className="widerange pt-4">
                   
                    <Link to ="/forgot"> <button type="button" className="widerange-button">Send OTP</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Register