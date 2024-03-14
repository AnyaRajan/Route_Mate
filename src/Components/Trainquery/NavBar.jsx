import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import './NavBar.css';

const Navbar = () => {
    const [sidebar,setSidebar]= useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return ( 
        <div>
          {sidebar? <motion.div layout className="background-blur"></motion.div> : null}
        <nav className="Navbar">
            {/* <img src="" alt="" className="logo" /> */}
            <p>RouteMate</p>
            <div className="links">
                <a href="/">Plan a Trip</a>
                <a href="/blogs">Blogs</a>
                <a href="/contacts">Contact</a>
                <FaBars className='mt-[10px] 'onClick={showSidebar} style={{
                     
                    marginLeft : '16px',
                    cursor: 'pointer'
                    }}/>
            </div>
        </nav>       
        <nav className={sidebar? 'sidebar active' : 'sidebar' }>
            <p>
            <AiOutlineClose onClick={showSidebar} style={{cursor:"pointer"}} />
            </p>
            <div className="iternary">
                <h3>Itinerary</h3>
                <ul>
                    <li>Day 1: Visit Museum</li>
                    <li>Day 2: Beach Day</li>
                    <li>Day 3: Hiking Trip</li>
                </ul>
            </div>
            <a href='/' id='logout'><MdLogout />Logout</a>
        </nav>
        </div>

     );
}
 
export default Navbar;