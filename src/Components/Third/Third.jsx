import React from "react";
import "./Third.css";
import Slider from "react-slick"; 
import slide from "../../Assets/Images/slide.jpeg"
import slide1 from "../../Assets/Images/slide1.jpeg"
import slide2 from "../../Assets/Images/slide2.jpeg"
import slide3 from "../../Assets/Images/slide3.jpeg"

function Third() {
  const settings = {
    dots: true,       
    infinite: true,   
    speed: 500,       
    slidesToShow: 1,  
    slidesToScroll: 1 
  };

  return (
    <span id="span">
        <h1 id="shoot">Working Time</h1>
      <div className="carousel-container">
        <Slider {...settings}> {}
          {}
          <div>
            <img src={slide} alt="Slide 1" id="slide"/>
          </div>
          <div>
            <img src={slide1} alt="Slide 2" id="slide1"/>
          </div>
          <div>
            <img src={slide2} alt="Slide 3" id="slide2"/>
          </div>
          <div>
            <img src={slide3} alt="Slide 4" id="slide3"/>
          </div>
        </Slider>
      </div>
    </span>
  );
}

export default Third;
