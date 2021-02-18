import React, { useEffect, useState } from "react";
import style from "./Navmenu.module.css";

let Navmenu = (props) => {
  const [section, setSection] = useState("#greeting");

  function scrollPage(id) {
    setSection(id);
    const elem = document.querySelector(id);
    elem.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function removeColorNav() {
    const greetingNav = document.querySelector("#greetingNav");
    const aboutNav = document.querySelector("#aboutNav");
    const portfolioNav = document.querySelector("#portfolioNav");
    const contactNav = document.querySelector("#contactNav");
    greetingNav.classList.remove(`${style.activeLink}`);
    aboutNav.classList.remove(`${style.activeLink}`);
    portfolioNav.classList.remove(`${style.activeLink}`);
    contactNav.classList.remove(`${style.activeLink}`);
  }

  function addColorNav(id) {
    removeColorNav();
    const elem = document.querySelector(id);
    elem.classList.add(`${style.activeLink}`);
  }

  window.addEventListener("scroll", () => {
    let id;
    let scrollH = window.pageYOffset;
    console.log(scrollH);
    if (scrollH <= 772) {
      id = "#greetingNav";
    } else if (scrollH >= 773 && scrollH < 1693) {
      id = "#aboutNav";
    } else if (scrollH >= 1694 && scrollH < 3780) {
      id = "#portfolioNav";
    } else {
      id = "#contactNav";
    }
    addColorNav(id);
  });

  return (
    <div id="navbar" className={style.navWrapper}>
      <div className={style.navContent}>
        <div
          id="greetingNav"
          className={`${style.pageLink} ${
            section === "#greeting" ? style.activeLink : ""
          }`}
          onClick={() => scrollPage("#greeting")}
        >
          home
        </div>
        <div
          id="aboutNav"
          className={`${style.pageLink} ${
            section === "#about" ? style.activeLink : ""
          }`}
          onClick={() => scrollPage("#about")}
        >
          about
        </div>
        <div
          id="portfolioNav"
          className={`${style.pageLink} ${
            section === "#portfolio" ? style.activeLink : ""
          }`}
          onClick={() => scrollPage("#portfolio")}
        >
          portfolio
        </div>
        <div
          id="contactNav"
          className={`${style.pageLink} ${
            section === "#contact" ? style.activeLink : ""
          }`}
          onClick={() => scrollPage("#contact")}
        >
          contact
        </div>
      </div>
    </div>
  );
};

export default Navmenu;