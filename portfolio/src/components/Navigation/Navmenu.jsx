import React from "react";
import style from "./Navmenu.module.css";

const Navmenu = ({ scrollPage, about, greeting, contact, portfolio, section }) => {
  
    return (
    <div className={style.navWrapper}>
      <div className={style.navContent}>
        <div
          className={`${style.pageLink} ${
            section === greeting ? style.activeLink : ""
          }`}
          onClick={() => scrollPage(greeting)}
        >
          home
        </div>
        <div
          className={`${style.pageLink} ${
            section === about ? style.activeLink : ""
          }`}
          onClick={() => scrollPage(about)}
        >
          about
        </div>
        <div
          className={`${style.pageLink} ${
            section === portfolio ? style.activeLink : ""
          }`}
          onClick={() => scrollPage(portfolio)}
        >
          portfolio
        </div>
        <div
          className={`${style.pageLink} ${
            section === contact ? style.activeLink : ""
          }`}
          onClick={() => scrollPage(contact)}
        >
          contact
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
