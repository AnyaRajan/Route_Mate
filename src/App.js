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
import Plus from './plus';
import Formed from './Components/Pankaj/Formed'


const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <Loginpage /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/sendotp", element: <Sendotp /> },
  { path: "/tripcard", element: <Plus /> },
  { path: "/Formed", element: <Formed /> },

  
]);

function App() {

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
