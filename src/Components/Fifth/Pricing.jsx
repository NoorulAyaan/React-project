import React from "react";
import "./Pricing.css";
import birthday from "../../Assets/Images/birthday.jpeg";
import engagement from "../../Assets/Images/engagement.jpeg";
import personal from "../../Assets/Images/personal.jpeg";
import wedding from "../../Assets/Images/wedding.jpeg";

function Pricing() {
  return (
    <>
      <div id="price">  {}
        <div id="heading">
          <h1 id="Services">Services</h1>
          <p id="pakage">Please choose your package</p>
        </div>

        <div id="catogary">

          <div id="wedding">
            <h3>Wedding</h3>
            <img src={wedding} alt="" id="wedding1"/>
            <p>Celebrate your Wedding with Cinematic productions</p>
            <h3>Rs:20000</h3>
          </div>

          <div id="engagement">
            <p>Engagement</p>
            <img src={engagement} alt="" id="engagement1"/>
            <p>Celebrate your Engagement with Cinematic productions</p>
            <h3>Rs:12000</h3>
          </div>
          <div id="personal">
            <p>Personal</p>
            <img src={personal} alt="" id="personal1"/>
            <p>Have a Personal shoot with Cinematic productions</p>
            <h3>Rs:8000</h3>
          </div>

          <div id="birthday">
            <p>Birthday</p>
            <img src={birthday} alt="" id="birthday1"/>
            <p>Celebrate your Birthday with Cinematic productions</p>
            <h3>Rs:5000</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
