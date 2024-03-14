import React from 'react'
import logo from '../../Assets/logo1.png'
import rt1 from '../../Assets/rt1.png'
import lt1 from '../../Assets/lt1.png'
import girl from '../../Assets/girl.png'
import boy from '../../Assets/boy.png'
import taj from '../../Assets/taj.png'
import agfo from '../../Assets/agfo.png'
import ftpsk from '../../Assets/ftpsk.png'
import trvl from '../../Assets/trvl.jpg'
import "./Blogpage.css"
const posts = [
  {
    id: 1,
    name : 'TajMahal',
    title: 'Day 1: The Majestic Taj Mahal',
    href: '#',
    description:
    'The Agra Fort, another UNESCO World Heritage Site, stands tall as a testament to the grandeur of the Mughal Empire. Built by Emperor Akbar, this red sandstone fortress houses palaces, mosques, and audience halls that provide a glimpse into the opulent lifestyle of the Mughal rulers.',
    extra :  " Pro Tip: To avoid the crowds, plan an early morning visit to witness the Taj Mahal at sunrise. Don't forget to capture the magical moments as the sun-kissed dome reflects in the pristine waters of the Yamuna River.",
    im: taj
  },
  {
    id: 2,
    title: 'Day 2: A Walk Through Agra Fort',
    href: '#',
    description:
      'No visit to Agra is complete without witnessing the ethereal beauty of the Taj Mahal. Built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this UNESCO World Heritage Site is an architectural masterpiece. As the first light of dawn bathes the ivory-white mausoleum, the marble comes alive with hues of pink and gold, creating a mesmerizing spectacle.',
      extra : 'Suggestion: Engage a local guide to unravel the stories behind the intricately designed Diwan-i-Khas, Jahangir Mahal, and the Sheesh Mahal within the Agra Fort. The historical anecdotes and architectural insights will enrich your experience.',
    im: ftpsk
  }
  ,
  {
    id: 3,
    title: 'Day 3: Exploring Fatehpur Sikri',
    href: '#',
    description:
      'A short drive from Agra takes you to Fatehpur Sikri, an abandoned city that served as the capital of the Mughal Empire for a short period. The well-preserved structures, including the Buland Darwaza and the Jama Masjid, showcase the architectural prowess of the Mughals.',
    extra :  " Recommendation: Plan a day trip to Fatehpur Sikri to explore its unique blend of Mughal and Persian architecture. The serene ambiance and historical significance make it a compelling addition to your Agra itinerary.",
    im: agfo
  }
]

function Home() {


  return (
    <>
    <div className="hc home-container pt-5 bg-no-repeat bg-center bg-cover bg-blue-950" >
      <div className="header" >
      <div className=" w-[40em]" >
      <img src={logo} className="logo w-1/5 pl-10" alt="Logo"/>
      </div>
      </div>
      {posts.map((post) => (
      <div className="flex pt-20 pl-10 pr-20 w-full flex-row justify-around">
        <img src = {post.im} className="w-96 pr-10" alt="tajMAHAL"/>
        <div className="flex flex-col text-white text-justify text-base">
          <p className="text-bold text-5xl pb-20 mr-[2em]">{post.title}</p>
          <p className='text-xl mr-[2em]'>{post.description}
      </p>
          <p className='pt-4 text-xl mr-[2em]'>{post.extra}</p>
        </div>
      </div>
      ))}
    </div>
  
         
 </>
 )
}

export default Home