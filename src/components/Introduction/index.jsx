import React from "react";
import style from "./Introduction.module.css";

const Introduction = ({ greeting, scrollPage, about }) => {
  return (
    <div ref={greeting} className={style.wrapper}>
       <div className={style.contentGreeting}>
        <p className={style.text}>
          Hello, I'm <span className={style.textRed}>Darya Radzevich.</span>
        </p>
        <div>
          <p className={style.text}>I'm a front end developer.</p>
        </div>
        <div className={style.button} onClick={() => scrollPage(about)}>
          View my work
        </div>
      </div>
    </div>
  );
};

export default Introduction;
