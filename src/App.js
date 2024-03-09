import React from 'react';
import './App.css';
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Loginpage from "./Components/Loginpage/Loginpage";
import Register from "./Components/Register/Register";
import Forgot from "./Components/Forgot/Forgot";
import Homepage from "./Components/Homepage/Homepage";
import Sendotp from "./Components/Sendotp/Sendotp";
import Tripcard from "./Components/TripCard/TripCard";
import Tripsdata from './Tripsdata';

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <Loginpage /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/sendotp", element: <Sendotp /> },
  { path: "/tripcard", element: <Tripcard /> }
]);

function App() {
  const cards = Tripsdata.map((item) => {
    return (
      <Tripcard
       
        img="../images/tajmahal.jpg"
        location={item.location}
        title={item.title}
        date={item.date}
      />
    );
  });

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <div className='my-app'>
        <div className="heading">
        <h1 className='text-white text-4xl text-center mt-[50px] mb-[80px]'>Find your Travel Buddy</h1>

        </div>
        <div className="trips">
          {cards}
        </div>
      </div>
    </>
  );
}

export default App;
