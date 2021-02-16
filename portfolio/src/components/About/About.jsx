import React from "react";
import style from "./About.module.css";

let About = (props) => {
  return (
    <div className={style.aboutWrapper}>
      <div className={style.aboutContent}>
        <div className={style.title}>about</div>
        <div className={style.lineUnderTitle}></div>
        <a href="https://github.com/Darya812">
          <div className={style.conteinerImg}>
            GitHub
            {/* link  github */}
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
