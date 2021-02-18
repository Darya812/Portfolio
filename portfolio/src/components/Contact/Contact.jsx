import React from "react";
import style from "./Contact.module.css";
import gmail from "./img/gmail.png"
import github from "./img/github.png"

let Contact = (props) => {
  return (
    <div id="contact" className={style.contactWrapper}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={style.svgcolorLight}
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
      </svg>
      <div className={style.contactContent}>
        <div className={style.title}>contact</div>
        <div className={style.lineUnderTitle}></div>
        <p>Have a question or want to work together?</p>
        <div className={style.contactLinks}>
          <a href="mailto:ganocij1@gmail.com">
            <div className={style.containerImg}>
              <img
                src={gmail}
                width="30px"
              ></img>
            </div>
          </a>
          <a href="https://github.com/Darya812">
            <div className={style.containerImg}>
              <img
                src={github}
                width="30px"
              ></img>
            </div>
          </a>
        </div>
        <div className={style.autor}>
          DARYA RADZEVICH <span>© 2021</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
