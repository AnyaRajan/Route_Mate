import React from "react";
import "./TrainQuery.css";
import QueryBox from "./QueryBox";
import NavBar from "./NavBar"
// import Background from "./Background";

function App() {
  return (
    <div className="app">
      
      <header className="app-header">
        <NavBar />
      </header>
      <div className="app-container">
        <QueryBox />
      </div>
    </div>
  );
}

export default App;
