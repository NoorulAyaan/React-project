import React, { useState } from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import "./Navbar.css";
import Signin from "./Sign-in/Signin";
import Signup from "./Sign-up/Signup";


function Navbar() {
  
  const [showForm, setShowForm] = useState(null); 

 
  const showSignin = () => setShowForm('signin');
  const showSignup = () => setShowForm('signup');
  const hideForm = () => setShowForm(null);

  return (
    <>
      <div id="navbar">
        <Leftside />
        <Rightside showSignin={showSignin} showSignup={showSignup} />
      </div>

      {}
      {showForm === 'signin' && <Signin hideForm={hideForm} />}
      {showForm === 'signup' && <Signup hideForm={hideForm} />}
    </>
  );
}

export default Navbar;
