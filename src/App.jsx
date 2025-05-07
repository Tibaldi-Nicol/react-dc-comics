// src/App.jsx

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import ListComics from "./Components/ListComics";
import Footer from "./Components/Footer";
import "./App.css";

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
