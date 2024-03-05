import "./App.css";
import { useRef } from "react";
// import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./Components/Loginpage/Loginpage";

function App() {
  const navbarRef = useRef();
  return (
    <>
      
        <div className="App">
          
          <Routes>
            
            
          <Route
          exact
          path="/Loginpage"
          element={
            <>
              <Loginpage />
            </>
          }
        />
            
            
          </Routes>
         
        </div>
      
    </>
  );
}

export default App;