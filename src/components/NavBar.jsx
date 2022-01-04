import React from "react";
import logoNav from "../img/wood.png";

const NavBar = () => {
  return (
      <nav className="navbar bg-dark">
        <img src={logoNav} alt="logo"  />
        <a href="#about">About</a>
        <a href="#furnitures">Furnitures</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
      </nav>
      
  );
};

export default NavBar;
