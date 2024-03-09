import React, { useState } from 'react';
import {Link} from "react-router-dom";
// import "./Register.css";
import Tripcard from "./Components/TripCard/TripCard";
import Tripsdata from './Tripsdata';

function Plus() {
  const cards=Tripsdata.map((item)=>{
    return(
      <Tripcard
      img='../images/tajmahal.jpg'
      location={item.location}
      title={item.title}
      date={item.date}
       />
    )
  })

  return (
    <div className='my-app'>
      <div className="heading">
      <h1 className='text-4xl text-white text-center mt-[60px] mb-[80px]'>Find your Travel Buddy</h1>

      </div>
      <div className="trips">
        {cards}
      </div>
    </div>
  );
}

export default Plus