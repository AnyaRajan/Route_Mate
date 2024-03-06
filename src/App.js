import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Loginpage from "./Components/Loginpage/Loginpage";
import Register from "./Components/Register/Register";
import Forgot from "./Components/Forgot/Forgot";
import Homepage from "./Components/Homepage/Homepage";
import Sendotp from "./Components/Sendotp/Sendotp";
import Travelbuddy from "./Components/Travelbuddy/Travelbuddy";
const  router=createBrowserRouter([
  { path:"/",element:<Homepage/>
  },{path:"/Loginpage",element:<Loginpage/>},
  {path:"/register",element:<Register/>},
  {path:"/forgot",element:<Forgot/>},
  {path:"/sendotp",element:<Sendotp/>},
  {path:"/travelbuddy",element:<Travelbuddy/>}
])
function App() {
  return (
    <>

      <RouterProvider router={router}/>
    </>
  );
}

export default App;