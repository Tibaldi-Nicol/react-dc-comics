import React from 'react';
import logo from "../assets/img/dc-logo.png";

function Navbar() {
  // Utilizzo l'array 
  const links = [
    {
      id: 1,
      href: "#",
      label: "Characters",
      current: false,
    },
    {
      id: 2,
      href: "#",
      label: "Comics",
      current: true,
    },
    {
      id: 3,
      href: "#",
      label: "Movies",
      current: false,
    },
    {
      id: 4,
      href: "#",
      label: "TV",
      current: false,
    },
    {
      id: 5,
      href: "#",
      label: "Games",
      current: false,
    },
    {
      id: 6,
      href: "#",
      label: "Collectibles",
      current: false,
    },
    {
      id: 7,
      href: "#",
      label: "Videos",
      current: false,
    },
    {
      id: 8,
      href: "#",
      label: "Fans",
      current: false,
    },
    {
      id: 9,
      href: "#",
      label: "News",
      current: false,
    },
    {
      id: 10,
      href: "#",
      label: "Shop",
      current: false,
    }
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="DC Logo" />
        </div>
        <ul className="nav-links">
          {/* Ciclo l'array dei links per creare gli elementi del menu */}
          {links.map((link) => (
            <li key={link.id} className={link.current ? 'active' : ''}>
              <a href={link.href}>{link.label.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Jumbotron sotto la navbar */}
      <div className="jumbotron">
        <div className='button-series'>
          <a className='Buttons' href="">Current Series</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

