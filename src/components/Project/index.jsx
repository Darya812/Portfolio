import React from "react";
import style from "./Project.module.css";

const Project = ({img, name, description, linkDemo, linkGithub}) => {
  return (
    <div className={style.projectWrapper}>
      <div className={style.imgContainer}>
        <img
          src={img}
          alt="photo"
          className="photo"
          width="100%"
        />
      </div>
      <div className={style.projectDescription}>
        <div className={style.projectDescriptionTitle}>
          {name}
        </div>
        <div className={style.descriptionApp}>{description}</div>
        <div className={style.panelButtons}>
          <a href={linkDemo}>
            <div className={style.button}>DEMO</div>
          </a>
          <a href={linkGithub}>
            <div className={style.button}>GitHub</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
