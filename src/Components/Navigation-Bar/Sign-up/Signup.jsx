import React from "react";
import "../Sign-up/Signup.css"

function Signup({ hideForm }) {
  return (
    <div id="signup" className="form-overlay">
      <div className="form-container">
        <button className="close-btn" id="closebtn" onClick={hideForm}>Close</button>
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="Email" id="email"/>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
