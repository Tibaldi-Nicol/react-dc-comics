import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

import Footer from "./Components/Footer";
import "./App.css";
import ListComics from "./Components/ListComics";

function App() {
  return (
    <div className="container">
      <Navbar />
     
      <Main />
      
      <Footer />
    </div>
  );
}

export default App;
