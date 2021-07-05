import React from "react";
import { Icon } from "@iconify/react";
import arrowDown from "@iconify/icons-bi/arrow-down";
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
          <span>View my work</span>
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
