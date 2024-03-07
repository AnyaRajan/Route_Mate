import React, { useState } from 'react';
import "./Register.css";

function Register() {
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [rollno, setRollno] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        var valid = 0;
        //Handle username logic
        var valid1 = 0;
        
        //Checks if roll number is valid or not
        //Works only for roll numbers of Y20, Y21, Y22 and Y23
        if(rollno===""){
            setMessage("Fields cannot be empty");
            return;
        }
        const regEx = /^\d+$/;
        if(!regEx.test(rollno) && rollno!==""){
            setMessage("Invalid Roll Number");
            return;
        }
        else if(regEx.test(rollno)){
            var num = parseInt(rollno);
            var valid2 = 0;
            if(num > 200000 && num < 201172) valid2 = 1;
            else if(num > 210000 && num < 211213) valid2 = 1;
            else if(num > 220000 && num < 221239) valid2 = 1;
            else if(num > 230000 && num < 231209) valid2 = 1;

            if(!valid2){
                setMessage("Invalid Roll Number");
                return;
            }
            else{
                setMessage("");
            }
        }

        //Checks if both passwords are the same
        var valid3 = 0;
        if(password1==="" || password2==="") setMessage("Fields cannot be empty");
        else{
            if(password1===password2) valid3=1;
            if(!valid3) setMessage("Passwords do not match");
        }

        if(valid1 && valid2 && valid3) valid = 1;
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
                placeholder='Roll Number'
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
                className="register-input"
                />
                <input
                type="password"
                id="password"
                placeholder='Password'
                value={password1}
                onChange={(event) => setPassword1(event.target.value)}
                className="register-input"
                />

                <input
                type="password"
                id="conf-password"
                placeholder='Confirm Password'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                className="register-input"
                />
            </form>
            <div className="buttons pt-4">
                <button type="submit" className="register-button" onClick={handleSubmit}>Sign up</button>
                <a href="/Loginpage" className='back-to-login'><button type='button' >Login</button></a>
            </div>
            <p className='font-semibold text-lg text-red-700 pt-4'>{message}</p>
        </div>
    </div>
  )
}

export default Register