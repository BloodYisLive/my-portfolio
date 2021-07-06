import React from "react";
import amazon_clone from "../Projects_photos/amazon-clone.png";
import google_drive from "../Projects_photos/google_drive.png";

const FirstProject = {
  img: google_drive,
  title: "Google Drive UI clone made using ReactJs and Styled Components",
  codeLink: "https://github.com/BloodYisLive/google-drive-UI",
  projectLink: "https://google-drive-ui-by-jash.netlify.app/",
};
const SecondProject = {
  img: amazon_clone,
  title: "Amazon store clone made using ReactJs and Firebase",
  codeLink: "https://github.com/BloodYisLive/Amazon-clone/tree/master",
  projectLink: "https://amazon-clone-byjash.netlify.app/",
};
const ThirdProject = {
  img: google_drive,
  title: "Google Drive UI clone",
  codeLink: "https://github.com/BloodYisLive",
  projectLink: "#",
};

const Projects = (props) => {
  return (
    <>
      <div className='projects'>
        <img src={props.img} alt='google_drive' />
        <div className='projects-btn'>
          <a href={props.projectLink}>View Project</a>
          <a href={props.codeLink}>View Code</a>
        </div>
        <p>{props.title}</p>
      </div>
    </>
  );
};

export default Projects;
export { FirstProject, SecondProject, ThirdProject };
