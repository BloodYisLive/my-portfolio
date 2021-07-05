import React from "react";
import { Icon } from "@iconify/react";
import arrowDown from "@iconify/icons-bi/arrow-down";
import { Link } from 'react-scroll';
function Main() {
  return (
    <>
      <section id='main' className='main'>
        <h1 className='main-text'>
          Hey, I'm <span>Jash Palavwala</span>
        </h1>
        <p className='main-what-text margin-0'>
          I am a Desginer and a Front-end Developer
        </p>
        <div className='main-button-container'>
          <Link
              className='link'
              activeClass='active'
              to='portfolio'
              smooth={true}
              duration={1000}
              spy={true}
            >
          <span>View my work</span>
            </Link>
          <Icon
            icon={arrowDown}
            style={{ paddingLeft: "20px", fontSize: "40px" }}
          />
        </div>
      </section>
    </>
  );
}

export default Main;
