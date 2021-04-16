import React from "react";
import style from "./About.module.css";
import me from "./img/me.png";

const About = ({ about }) => {
  return (
    <div ref={about} className={style.aboutWrapper}>
      <div className={style.aboutContent}>
        <div className={style.title}>about</div>
        <div className={style.lineUnderTitle}></div>
        <div className={style.techSkills}>JS HTML CSS React</div>
        <div className={style.containerAbout}>
          <div className={style.picture}></div>
          <div className={style.education}>
            <h2>Education</h2>
            <p>
              Grodno State Agrarian University (economist), Grodno 2008-2012
            </p>
            <p>UpSkill Lab at Epam, Grodno 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
