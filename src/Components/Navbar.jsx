import React from 'react';
import logo from "../assets/img/dc-logo.png";


function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="DC Logo" />
        </div>
        <ul className="nav-links">
          <li>CHARACTERS</li>
          <li>COMICS</li>
          <li>MOVIES</li>
          <li>TV</li>
          <li>GAMES</li>
          <li>COLLECTIBLES</li>
          <li>VIDEOS</li>
          <li>FANS</li>
          <li>NEWS</li>
          <li>SHOP</li>
        </ul>
      </nav>

      {/* Jumbotron sotto la navbar */}
      <div className="jumbotron">
        <h1></h1>
    <div className='button-series'>
      <a className='Buttons' href="">Current Series</a>

    </div>
      </div>
    </div>
  );
}

export default Navbar;

