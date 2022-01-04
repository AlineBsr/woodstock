import React from "react";
import logoNav from "../img/wood.png";

const NavBar = () => {
  return (
      <nav className="navbar bg-dark">
        <img src={logoNav} alt="logo"  />
        <a href="/About">About</a>
        <a href="/Furnitures">Furnitures</a>
        <a href="/Shop">Shop</a>
        <a href="/Contact">Contact</a>
      </nav>
      
  );
};

export default NavBar;
