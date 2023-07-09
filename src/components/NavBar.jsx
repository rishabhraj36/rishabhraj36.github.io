import React from 'react';

const Navbar = () => {
  return (
    <nav id="nav-menu">
      <ul>
        <li><a href="#home" className="nav-link home">Home</a></li>
        <li><a href="#about" className="nav-link about">About</a></li>
        <li><a href="#skills" className="nav-link skills">Skills</a></li>
        <li><a href="#projects" className="nav-link projects">Projects</a></li>
        <li><a href="#contact" className="nav-link contact">Contact</a></li>
        <li><a href="#resume" className="nav-link resume">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
