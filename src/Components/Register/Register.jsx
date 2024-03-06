import React, { useState } from 'react';
import "./Register.css";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
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
                <a href="/Loginpage" className='back-to-login'><button type='button' >Login</button></a>
            </div>
        </div>
    </div>
  )
}

export default Register