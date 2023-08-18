import React from "react";
import './footer.css';

const Footer = () => {
    return (
<div class="footer">
    <div class="container">
      <div class="section">
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Chicken</a></li>
          <li><a href="#">Burger</a></li>
          <li><a href="#">Pizza</a></li>
        </ul>
      </div>
      <div class="section">
        <h2>Information</h2>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="section">
        <h2>Contact</h2>
        <ul>
          <li>Email: info@foodle.com</li>
          <li>Phone: 071123443</li>
          <li>Address: 0436 Street, City</li>
        </ul>
      </div>
    </div>
    <div class="contact">
      <p>&copy; 2023 Food. All rights reserved.</p>
    </div>
  </div>
    );
};
export default Footer;

