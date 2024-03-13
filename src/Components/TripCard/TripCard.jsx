import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import tajmahal from "../../Assets/tajmahal.png";
import './TripCard.css'
import { motion } from "framer-motion";
// import logo from "../images/logo512.png"

export default function Tripcard(props) {
  // console.log(tajmahal)
  // const details=document.querySelector(".details")
  // console.log(details)

  // const [greeting,setgreeting]=React.useState(false);
  //     let hi=true
  //     function changeText(){
  //         // setgreeting(()=>{
  //         //     console.log(!greeting)
  //         //     return !greeting
  //         // })

  //         if(hi===true) hi=false
  //         else hi=true

  //         console.log(hi)
  //   }

  // let hi=greeting?"hello":"bye"

  return (
    <motion.div className="container">
      <div className="card">
        <div className="profile">
          <img src={tajmahal} alt="" />
        </div>
        <div className="details1">
          <div className="location">
            <FaLocationDot className="location-icon" />
            <p>{props.location}</p>
          </div>
          <div className="title">
            <h3 className="title">{props.title}</h3>
          </div>
          <div className="date">
            <FaCalendarDays className="calender-icon" />
            <p>{props.date}</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="btn1 p-2 pl-3 text-cyan-600 text-semibold"
        //   onClick={() => props.onDelete(props.id)}
        >View More</motion.button>
      </div>
    </motion.div>
  );
}