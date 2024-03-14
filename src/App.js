import React from 'react';
import './App.css';
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Loginpage from "./Components/Loginpage/Loginpage";
import Register from "./Components/Register/Register";
import Forgot from "./Components/Forgot/Forgot";
import Homepage from "./Components/Homepage/Homepage";
import Sendotp from "./Components/Sendotp/Sendotp";
import Plus from './plus';
import Formed from './Components/Pankaj/Formed';
import Index from './Components/Train Details';
import Blogpage from './Components/Blogpage/Blogpage';

import TrainQuery from './Components/Trainquery/TrainQuery'

const router = createBrowserRouter([
  
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <Loginpage /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/sendotp", element: <Sendotp /> },
  { path: "/tripcard", element: <Plus /> },
  { path: "/Formed", element: <Formed /> },
  { path: "/details", element: <Index />},
  { path: "/blogs", element: <Blogpage />},
  { path: "/trainquery", element: <TrainQuery />}
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
      {/* <RouterProvider router={router} /> */}
      
    </>
  );
}

export default App;
