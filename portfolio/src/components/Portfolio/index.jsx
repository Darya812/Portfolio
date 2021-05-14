import React from "react";
import style from "./Portfolio.module.css";
import Project from "../Project";

import raindrop from "../../images/raindrop.png";
import weather from "../../images/weather.png";
import syngolo from "../../images/syngolo.png";
import flex from "../../images/flex.png";
import drum from "../../images/drum.png";
import snapShot from "../../images/snap_shot.png";

const projects = [
  {
    id: "0",
    name: "Weather App",
    description: "Three days weather forecast app with geolocation",
    img: weather,
    linkDemo: "https://darya812.github.io/fancy-weather/",
    linkGithub: "https://github.com/Darya812/fancy-weather/tree/weather",
  },
  {
    id: "1",
    name: "Raindrops Game",
    description:
      "A math simulator that allows you to consolidate the skills of arithmetic operations: addition, subtraction, multiplication and division",
    img: raindrop,
    linkDemo: "https://darya812.github.io/raindrops/",
    linkGithub: "https://github.com/Darya812/raindrops/tree/game",
  },
  {
    id: "2",
    name: "Drum kit",
    description:
      "A music application in which you can play sounds by pressing keys on the keyboard",
    img: drum,
    linkDemo: "https://darya812.github.io/Drum-Kit/",
    linkGithub: "https://github.com/Darya812/Drum-Kit/tree/drum",
  },

  {
    id: "3",
    name: "Flex Panel",
    description: "JavaScript image slider",
    img: flex,
    linkDemo: "https://darya812.github.io/Flex-Panel-Gallery/",
    linkGithub:
      "https://github.com/Darya812/Flex-Panel-Gallery/tree/flex-panel",
  },
  {
    id: "4",
    name: "Simple Singolo",
    description: "Responsive web application",
    img: syngolo,
    linkDemo: "https://darya812.github.io/singolo/",
    linkGithub: "https://github.com/Darya812/singolo/tree/singolo_branch",
  },
  {
    id: "5",
    name: "Snap-Shot",
    description: "Snap Shot is a gallery created using React,React Hooks.",
    img: snapShot,
    linkDemo: "https://optimistic-bardeen-48361e.netlify.app/",
    linkGithub: "https://github.com/Darya812/Snap-Shot/tree/master",
  },
];

const Portfolio = (props) => {
  return (
    <div ref={props.portfolio} className={style.portfolioWrapper}>
      <div className={style.portfolioContent}>
        <div className={style.title}>PROJECTS</div>
        <div>
          {projects.map((project) => {
            return (
              <Project
                img={project.img}
                name={project.name}
                description={project.description}
                linkDemo={project.linkDemo}
                linkGithub={project.linkGithub}
                key={project.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
