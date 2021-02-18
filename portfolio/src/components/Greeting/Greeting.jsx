import React from "react";
import style from "./Greeting.module.css";

let Greeting = (props) => {
  function scrollPage(id) {
    const elem = document.querySelector(id);
      elem.scrollIntoView({block: "start", behavior: "smooth"});
   } 
  return (
    <div id="greeting" className={style.wrapper}>
      <div className={style.contentGreeting}>
        <div>
          <p className={style.text}>
            Hello, I'm <span className={style.textRed}>Darya Radzevich.</span>
          </p>
        </div>
        <div>
          <p className={style.text}>I'm a front end developer.</p>
        </div>
        <div className={style.button} onClick={()=>scrollPage("#about")}>View my work</div>
      </div>
    </div>
  );
};

export default Greeting;
