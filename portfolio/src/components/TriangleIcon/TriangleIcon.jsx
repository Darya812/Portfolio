import React from "react";
import style from "./TriangleIcon.jsx"

const TriangleIcon = () => {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 102"
      height="75"
      width="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={style.svgcolorLight}
    >
      <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"/>
    </svg>
  );
};

export default TriangleIcon;
