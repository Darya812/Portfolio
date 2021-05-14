import React from "react";
import ButtonMenu from "../ButtonMenu";

import style from "./Navmenu.module.css";

const Navmenu = ({
  scrollPage,
  about,
  greeting,
  contact,
  portfolio,
  section,
}) => {
  const buttons = [
    {
      name: "home",
      section: greeting,
      id: 1,
    },
    {
      name: "about",
      section: about,
      id: 2,
    },
    {
      name: "portfolio",
      section: portfolio,
      id: 3,
    },
    {
      name: "contact",
      section: contact,
      id: 4,
    },
  ];
  return (
    <div className={style.navWrapper}>
      <div className={style.navContent}>
        {buttons.map((button) => {
          return (
            <ButtonMenu
              section={section}
              buttonSection={button.section}
              name={button.name}
              scrollPage={scrollPage}
              key={button.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navmenu;