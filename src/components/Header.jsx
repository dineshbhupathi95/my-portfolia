import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="animate-header">Dinesh Bhupathi</h1>
      <p className="animate-header">Dynamic Python Developer with 5+ years of experience</p>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
