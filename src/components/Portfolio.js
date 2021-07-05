import React from "react";
import Projects from "./Projects";
import { FirstProject, SecondProject, ThirdProject } from "./Projects";
function Portfolio() {
  return (
    <>
      <section id='portfolio' className='portfolio'>
        <h1 className='margin-0'>
          Thing I have <span>worked on.</span>
        </h1>
        <p className='margin-b-0'>
          Here are a few design projects <br /> I've worked on.
        </p>
        <div className='portfolio-upper-container'>
          <Projects
            img={FirstProject.img}
            title={FirstProject.title}
            codeLink={FirstProject.codeLink}
            projectLink={FirstProject.projectLink}
          />
          <Projects
            img={SecondProject.img}
            title={SecondProject.title}
            codeLink={SecondProject.codeLink}
            projectLink={SecondProject.projectLink}
          />
          <Projects />
        </div>
        <div className='portfolio-lower-container'>
          <Projects />
          <Projects />
          <Projects />
        </div>
      </section>
    </>
  );
}
export default Portfolio;
