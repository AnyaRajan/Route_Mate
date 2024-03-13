import React from 'react'
import taj from '../../Assets/taj.png'
import agfo from '../../Assets/agfo.png'
import ftpsk from '../../Assets/ftpsk.png'
import Navbar from './Navbar'
import "./Blogpage.css"

function Blogpage() {

  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className="hc Blogpage-container pt-5 bg-no-repeat bg-center bg-cover bg-blue-950" >
      <div className="header" >
      </div>

      <div className="flex pt-20 pl-10 pr-20 w-full flex-row justify-around">
        <img src = {taj} className="w-2/3 pr-10" alt="tajMAHAL"/>
        <div className="flex flex-col text-white text-justify text-base">
          <p className="text-bold text-5xl pb-20 mr-[2em]">Day 1: The Majestic Taj Mahal</p>
          <p className='text-xl mr-[2em]'>The Agra Fort, another UNESCO World Heritage Site, stands tall as a testament to the grandeur of the Mughal Empire. Built by Emperor Akbar, this red sandstone fortress houses palaces, mosques, and audience halls that provide a glimpse into the opulent lifestyle of the Mughal rulers.
      </p>
          <p className='pt-4 text-xl mr-[2em]'>Pro Tip: To avoid the crowds, plan an early morning visit to witness the Taj Mahal at sunrise. Don't forget to capture the magical moments as the sun-kissed dome reflects in the pristine waters of the Yamuna River.</p>
        </div>
      </div>
      <div className="flex pt-20 pl-10 pr-20 w-full flex-row justify-around">
        <img src = {ftpsk} className="w-[25em] pr-10" alt="ftpsk"/>
        <div className="flex flex-col text-white text-justify text-base">
          <p className="text-bold text-5xl pb-20 mr-[2em]">Day 2: A Walk Through Agra Fort</p>
          <p className='text-xl mr-[2em]'>No visit to Agra is complete without witnessing the ethereal beauty of the Taj Mahal. Built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this UNESCO World Heritage Site is an architectural masterpiece. As the first light of dawn bathes the ivory-white mausoleum, the marble comes alive with hues of pink and gold, creating a mesmerizing spectacle.</p>
          <p className='pt-4 text-xl mr-[2em]'>Suggestion: Engage a local guide to unravel the stories behind the intricately designed Diwan-i-Khas, Jahangir Mahal, and the Sheesh Mahal within the Agra Fort. The historical anecdotes and architectural insights will enrich your experience.</p>
        </div>
      </div>
      <div className="flex pt-20 pl-10 pr-20 pb-10 w-full flex-row justify-around">
        <img src = {agfo} className="w-[25em] pr-10" alt="agfo"/>
        <div className="flex flex-col text-white text-justify text-base">
          <p className="text-bold text-5xl pb-20 mr-[2em]">Day 3: Exploring Fatehpur Sikri</p>
          <p className='text-xl mr-[2em]'>A short drive from Agra takes you to Fatehpur Sikri, an abandoned city that served as the capital of the Mughal Empire for a short period. The well-preserved structures, including the Buland Darwaza and the Jama Masjid, showcase the architectural prowess of the Mughals.</p>
          <p className='pt-4 text-xl mr-[2em]'>Recommendation: Plan a day trip to Fatehpur Sikri to explore its unique blend of Mughal and Persian architecture. The serene ambiance and historical significance make it a compelling addition to your Agra itinerary.</p>
        </div>
      </div>
    </div>  
 </>
 )
}

export default Blogpage