import React from "react";
import "./Responsive.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

function Responsive({ toggleMenu }) {
  return (
    <div id="button">
      <button id="button1" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} id="icon" />
      </button>
    </div>
  );
}

export default Responsive;
