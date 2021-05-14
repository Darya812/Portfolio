import React from "react";
import style from "./Contact.module.css";
import gmail from "../../images/gmail.png";
import github from "../../images/github.png";
import TriangleIcon from "../TriangleIcon";

const contacts = {
  email: "mailto:ganocij1@gmail.com",
  github: "https://github.com/Darya812",
};

const Contact = ({ contact }) => {
  const year = new Date();

  return (
    <div ref={contact} className={style.contactWrapper}>
      <TriangleIcon />
      <div className={style.contactContent}>
        <div className={style.title}>contact</div>
        <p>Have a question or want to work together?</p>
        <div className={style.contactLinks}>
          <a href={contacts.email}>
            <div className={style.containerImg}>
              <img src={gmail} width="30px" />
            </div>
          </a>
          <a href={contacts.github}>
            <div className={style.containerImg}>
              <img src={github} width="30px" />
            </div>
          </a>
        </div>
        <div className={style.autor}>
          DARYA RADZEVICH <span>© {year.getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
