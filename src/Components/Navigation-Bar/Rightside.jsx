import React, { useState } from "react";
import { Link } from "react-scroll";  
import Button from "./Button/Button"; 
import Responsive from "./Button/Responsive";

function Rightside({ showSignin, showSignup }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); 

  const toggleDropdown = (event) => {
    event.preventDefault();  
    setDropdownVisible(!isDropdownVisible);  
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div id="rightside">
      <ul className={isMenuOpen ? "active" : ""}> {}
        <li><a href="#">Home</a></li>
        <li>
          <Link to="about" smooth={true} duration={300}>
            <a href="#">About Us</a>
          </Link>
        </li>
        <li>
          <Link to="price" smooth={true} duration={300}>
            <a href="#">Services</a>
          </Link>
        </li>

        <li id="contact">
          <a href="#" onClick={toggleDropdown}>Contact</a>
          <ul id="drop" style={{ display: isDropdownVisible ? "block" : "none" }}>
            <li><a href="#">Number</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </li>
      </ul>
      <Button showSignin={showSignin} showSignup={showSignup} id="signbuttons" />
      <Responsive toggleMenu={toggleMenu} /> {}
    </div>
  );
}

export default Rightside;
