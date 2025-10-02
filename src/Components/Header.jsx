import React, { useState } from 'react';
import './Header.css';
import LogoIcon from '../assets/IconLogo.png';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Header-Container'>
      <div className="Header-Wrapper">
        {/* Logo */}
        <div className="Logo-Container">
          <img src={LogoIcon} alt="LogoIcon" />
          <h2>EMANN.CO</h2>
        </div>

        {/* Nav + Button */}
        <div className={`Nav-Menu ${isOpen ? "open" : ""}`}>
          <div className="Nav-Container">
            <NavLink to="/" onClick={() => setIsOpen(false)}>HOME</NavLink>
            <NavLink to="/doctors" onClick={() => setIsOpen(false)}>All DOCTORS</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>ABOUT</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>CONTACT</NavLink>
          </div>
          <button className='Create-Account-Btn'>Create Account</button>
        </div>

        {/* Menu Button */}
        <div className="Menu-Button" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Overlay background */}
      {isOpen && <div className="Overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Header;
