import React from "react";
import style from "./Portfolio.module.css";
import Project from "./Project/Project";

const addProject = (props) => {
  return props.map((project) => {
    return <Project project={project} key={project.id} />;
  });
};

const Portfolio = (props) => {
  return (
    <div
      ref={props.portfolio}
      className={style.portfolioWrapper}
    >
      <div className={style.portfolioContent}>
        <div className={style.title}>PROJECTS</div>
        <div className={style.lineUnderTitle}></div>
        <div>{addProject(props.projects)}</div>
      </div>
    </div>
  );
};

export default Portfolio;
