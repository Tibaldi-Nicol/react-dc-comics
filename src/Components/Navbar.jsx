import logo from "../assets/img/dc-logo.png"
function Navbar(){
    return(
        
        <div className="container">
        <nav className="navbar">
          <div className="logo"><img src={logo} alt="DC Logo" />
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
        </div>
        
      );
}

export default Navbar;