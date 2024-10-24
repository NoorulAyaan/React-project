import React from "react";
import "../Sign-in/Signin.css"

function Signin({ hideForm }) {
  return (
    <div id="signin" className="form-overlay">
      <div className="form-container">
        <button className="close-btn" id="closebtn" onClick={hideForm}>Close</button>
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
