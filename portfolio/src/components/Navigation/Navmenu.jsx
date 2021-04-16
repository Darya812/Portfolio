import React, { useState, useEffect } from "react";
import style from "./Navmenu.module.css";

const Navmenu = ({ scrollPage, about, greeting, contact, portfolio }) => {
  const section = null;

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollListener);

  //    return () => {
  //     window.removeEventListener('scroll', scrollListener);
  //   };
  // }, []);

  // function scrollPage(id) {
  //   setSection(id);
  //   const elem = document.querySelector(id);
  //   elem.scrollIntoView({ block: "start", behavior: "smooth" });
  // }

  // function scrollListener(params) {
  //   let id;
  //   const greetingNav = document.querySelector("#greeting");
  //   const portfolioNav = document.querySelector("#portfolio");
  //   const aboutNav = document.querySelector("#about");
  //   const contactNav = document.querySelector("#contact");
  //   let scrollH = window.pageYOffset;
  //   console.log(scrollH);
  //   if (scrollH < aboutNav.offsetTop) {
  //     id = "#greeting";
  //   } else if (
  //     scrollH >= aboutNav.offsetTop &&
  //     scrollH < portfolioNav.offsetTop
  //   ) {
  //     id = "#about";
  //   } else if (
  //     scrollH >= portfolioNav.offsetTop &&
  //     scrollH < contactNav.offsetTop
  //   ) {
  //     id = "#portfolio";
  //   } else {
  //     id = "#contact";
  //   }
  //   setSection(id);
  // }

  // window.addEventListener("scroll", () => {
  //   scrollListener();
  // });

  return (
    <div id="navbar" className={style.navWrapper}>
      <div className={style.navContent}>
        <div
          className={`${style.pageLink} ${
            section === "#greeting" ? style.activeLink : ""
          }`}
          onClick={() => scrollPage(greeting)}
        >
          home
        </div>
        <div
          className={`${style.pageLink} ${
            section === "#about" ? style.activeLink : ""
          }`}
          onClick={() => scrollPage(about)}
        >
          about
        </div>
        <div
          className={`${style.pageLink} ${
            section === "#portfolio" ? style.activeLink : ""
          }`}
          onClick={() => scrollPage(portfolio)}
        >
          portfolio
        </div>
        <div
          className={`${style.pageLink} ${
            section === "#contact" ? style.activeLink : ""
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
