import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
   <>
    <div className="fixed right-0 pt-4 mr-10 mt-5 z-50">
      <Link to = "/login"><button type='button' className="btn" >Login</button></Link>  
    </div>
   </>
  )
}

export default Navbar