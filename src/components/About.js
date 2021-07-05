import React from "react";
import dp from "../about_photo.png";
import Box from "./Box";

function About() {
  return (
    <>
      <div className='about' id='about'>
        <h1>About</h1>
        <div className='about-image-container'>
          <img src={dp} alt='dp' />
        </div>
        <Box />
      </div>
    </>
  );
}

export default About;
