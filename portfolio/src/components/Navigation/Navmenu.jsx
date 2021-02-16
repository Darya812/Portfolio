import React from "react";
import style from "./Navmenu.module.css";

let Navmenu = (props) => {
  return (
    <div className={style.navWrapper}>
      <div className={style.navContent}>
        <div className={style.pageLink}>home</div>
        <div className={style.pageLink}>about</div>
        <div className={style.pageLink}>portfolio</div>
        <div className={style.pageLink}>contact</div>
      </div>
    </div>
  );
};

export default Navmenu;
