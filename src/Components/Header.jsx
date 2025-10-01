import React, { useState } from 'react';
import './Header.css';
import LogoIcon from '../assets/IconLogo.png';
import { Link } from "react-router-dom";

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
            <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
            <Link to="/" onClick={() => setIsOpen(false)}>All DOCTOR</Link>
            <Link to="/" onClick={() => setIsOpen(false)}>ABOUT</Link>
            <Link to="/" onClick={() => setIsOpen(false)}>CONTACT</Link>
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
