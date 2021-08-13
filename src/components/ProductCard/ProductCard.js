import React from "react";
import { getIconComponent } from "../../utils/getIconComponent";
import CSS_COLOR_NAMES from "../../utils/cssColorNames";

import Classes from "./ProductCard.module.css";

export default function ProductCard({ id, icon, title, bgColor }) {
  let cssColors = CSS_COLOR_NAMES.map((color) => color.toLowerCase());
  //let cardBackgroundColor = cssColors.includes(bgColor.toLowerCase()) ? bgColor : "CornflowerBlue";

  return (
    <div className={Classes.ProductCardWrapper}>
      <div className={Classes.ProductCard} style={{ backgroundColor: `blue` }}>
        <div className={Classes.Icon}>{getIconComponent({ icon: icon, color: "white", fontSize: "2.5rem", alignSelf: "left" })}</div>
        <p className={Classes.InnerTitle}>{title}</p>
      </div>
      <p className={Classes.OuterTitle}>{title}</p>
    </div>
  );
}
