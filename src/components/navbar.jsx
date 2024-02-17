import React, { useState } from 'react';
import './navbar.css';

const Nav =()=>{

const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">Krishnamenan</div>
        <button className="toggle-button" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-links ${isOpen ? "mobile" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;