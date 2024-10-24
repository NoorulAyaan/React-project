import React, { useState } from "react";
import equpiment from "../../Assets/Images/equipment.jpg"; 
import "./Forth.css"; 

function Right() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <div id="us">
        <div id="now">
        <h1 id="About-us">About Us</h1>
        <p id="who-iam">Who I am and what I do</p>
        <p id="hii">
          Hi, my name is Hanan Ali Hasnat. I am an artist and photographer. No one can deny
          the pleasure because of the pain, or the hate, or the escape. We live with a focus
          on the details, taking care with every aspect. No one can deny the pleasure that
          comes with the whole experience, which is revealed, with the reality that can be
          understood only by the creator, and is explained by the architect of a blessed life.
          No one can deny the pleasure.
        </p>
        <button id="work" onClick={handleClick}>
          Book your Shoot
        </button>
        </div>


        {}
        {showForm && (
          <div id="form-container">
            <button id="close-btn" onClick={handleClose}>Close</button>
            <form id="booking-form">
              <h2>Book Your Shoot</h2>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Right;
