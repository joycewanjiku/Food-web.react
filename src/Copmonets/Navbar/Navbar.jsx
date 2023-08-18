import React from "react"
import './Navbar.css'
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Offer</a></li>
        <li><a href="/">Service</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Login</a></li>
      </ul>
      <button className="signup-button">Sign Up</button> 
    </nav>
  );
};
export default NavBar;