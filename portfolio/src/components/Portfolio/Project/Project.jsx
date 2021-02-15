import React from "react";
import style from "./Project.module.css";



const Project = (props) => {
    return (<div className={style.projectWrapper}>
      <div className={style.imgContainer}>
        <img src={props.project.img} alt="photo" className="photo" width="300px"></img>
      </div>
      <div className="projectDescription">
      <div className='projectDescriptionTitle'>{props.project.name}</div>
         <div className={style.panelButtons}>
        <button className={style.button}>DEMO</button>
        <button className={style.button}>GitHub</button>
      </div>
      </div>
     
  </div>
  );
};

export default Project;
