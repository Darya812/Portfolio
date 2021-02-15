import React from "react";
import style from "./About.module.css";

let About = (props) => {
  return (<div className={style.aboutWrapper}>
   <div className={style.aboutContent}>
    <div className={style.title}>about</div>
    <div className={style.lineUnderTitle}></div>
</div>
  </div>
  );
};

export default About;
