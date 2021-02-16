import React from "react";
import style from "./Project.module.css";



const Project = (props) => {
    return (<div className={style.projectWrapper}>
      <div className={style.imgContainer}>
        <img src={props.project.img} alt="photo" className="photo" width="100%"></img>
      </div>
      <div className={style.projectDescription}>
      <div className={style.projectDescriptionTitle}>{props.project.name}</div>
      <div className={style.descriptionApp}>{props.project.description}</div>
         <div className={style.panelButtons}>
         <a href={props.project.linkDemo}><div className={style.button}>DEMO</div></a>
         <a href={props.project.linkGithub}><div className={style.button}>GitHub</div></a>
      </div>
      </div>
     
  </div>
  );
};

export default Project;
