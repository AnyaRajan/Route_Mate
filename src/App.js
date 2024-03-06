import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./Components/Loginpage/Loginpage";
import Register from "./Components/Register/Register";

function App() {
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

            <Route
            exact
            path="/register"
            element={
              <>
                <Register />
              </>
            }
            />
          </Routes>
         
        </div>
      
    </>
  );
}

export default App;