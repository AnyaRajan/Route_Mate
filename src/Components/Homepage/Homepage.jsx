import React,{useEffect,useState} from 'react'
import { ReactDOM } from 'react'
import logo from '../../Assets/logo1.png'
import rt1 from '../../Assets/rt2.png'
import lt1 from '../../Assets/lt2.png'
import girl from '../../Assets/girl.png'
import boy from '../../Assets/boy.png'
import trvl from '../../Assets/trvl.jpg'
import Navbar from './Navbar'
import "./Homepage.css"
import Preloader from './Preloader/preloader'
import './script'
import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js'
function Homepage() {
  const [loading,setloading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
    setloading(false);
    },5000)
  })
  return (
    loading ? <Preloader/>:
    <>
    <div>
    <div >
      <Navbar />
    </div>
    <div className="Homepage-container pt-5  bg-center bg-cover" >
      <div className="header" >
      <div className=" w-[40em]" >
    <img src={logo} className="logo w-1/5 pl-10" alt="Logo"/>
  </div>
        <h1 className=' text-6xl text-white text-center font-serif pt-10'>Routemate</h1>
      </div>
      <div className=" ">
      <div class=" spin flex h-screen pt-10  w-full  justify-center items-baseline">
      <div >
    <img src={lt1} alt="leftarrow"/>
  </div>  
  
      <div className="" >
    <img src={rt1} alt="rightarrow"/>
  </div>
  </div>
  <div class=" flex absolute  mt-40 top-40 left-10 right-10 h-screen  w-full  justify-center items-baseline" id="place">
      <div className="text-right pr-52">
    <img src={boy} className="fade-in w-4/5  pr-20" alt="boyimg"/>
  </div>  
     
  <div >
    <img src={girl} className="fade-in w-4/5 pl-10" alt="girlimg"/>
  </div>
  </div>
  <h1 className='text-4xl -mt-20 pb-52 text-white font-serif text-center'>Find travel buddies and discover the world together</h1>
  </div>
  <div className="flex pt-20 pl-10 pr-20 pb-10 w-full flex-row justify-around">
        <img src = {trvl} className="w-[25em] pr-10" alt="travel"/>
        <div className="flex flex-col text-white text-justify text-base">
          <p className="text-bold text-5xl pb-20 mr-[2em]">About Us</p>
          <p className='text-xl mr-[2em]'>Welcome to Route Mate, your trusted travel companion for shared journeys to your Homepagetown and beyond. Connect with fellow students from IIT Kanpur and embark on safe, enjoyable trips together. Our platform features a chat function, allowing you to communicate with potential travel companions and plan your trip seamlessly. </p>
          <p className='pt-4 text-xl mr-[2em]'>Additionally, explore our blog section for travel tips, destination guides, and inspiring stories. Want to share your own experiences? Create your own blogs and inspire others with your adventures. Join our community today and travel with confidence.</p>
        </div>
      </div>      
  </div>
  </div>
         
 </>
 )
}

export default Homepage