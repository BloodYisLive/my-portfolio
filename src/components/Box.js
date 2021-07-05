import React from "react";
import { Icon } from "@iconify/react";
import codeIcon from "@iconify/icons-codicon/code";
import designIdeas16Regular from "@iconify/icons-fluent/design-ideas-16-regular";

function Box() {
  return (
    <>
      <div className='box'>
        <div className='box-left'>
          <Icon icon={codeIcon} className='icons' />
          <h2>Front-end Developer</h2>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <h3>Languages I speak:</h3>
          <p>HTML, CSS, Sass, Javascript</p>
          <h3>Dev Tools:</h3>
          <ul className='dev-tools padding-0'>
            <li>Vs code</li>
            <li>Github</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className='box-right'>
          <Icon icon={designIdeas16Regular} className='icons' />
          <h2>Designer</h2>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <h3>Things I enjoy designing:</h3>
          <p>UI, Web, Mobile, Apps, Logos</p>
          <h3>Dev Tools:</h3>
          <ul className='dev-tools padding-0'>
            <li>Figma</li>
            <li>Pen & Paper</li>
            <li>XD</li>
            <li>Photoshop</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Box;
