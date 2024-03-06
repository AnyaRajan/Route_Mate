import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Homepage.css';

const Homepage = () => {
  
  return (
    <div className='home'>
    <div className='upper'>
        <div className='imglog'>
       
        </div>
        <h1>Routemate</h1>
        <Link to="/Loginpage"><button type="submit" className="login-button"> Login</button> </Link>
        </div>  
       
    </div>
  );
};

export default Homepage;