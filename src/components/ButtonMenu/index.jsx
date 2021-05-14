import React from "react";
import style from "./ButtonMenu.module.css";

const ButtonMenu = ({ name, scrollPage, section, buttonSection }) => {
  return (
    <div
      className={`${style.pageLink} ${
        section === buttonSection ? style.activeLink : ""
      }`}
      onClick={() => scrollPage(buttonSection)}
    >
      {name}
    </div>
  );
};

export default ButtonMenu;
