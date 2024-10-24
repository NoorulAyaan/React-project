import React from "react";
import "./Button.css";

function Button({ showSignin, showSignup }) {
  return (
    <div id="button2">
      <button id="btn" onClick={showSignin}>
        Sign in
      </button>
      <button id="btn1" onClick={showSignup}>
        Sign up
      </button>
    </div>
  );
}

export default Button;
