import React from "react";
import { Link } from "react-router-dom";
import { getIconComponent } from "../../utils/getIconComponent";
import CSS_COLOR_NAMES from "../../utils/cssColorNames";

import Classes from "./ProductCard.module.css";
import { product } from "prelude-ls";

export default function ProductCard({ item, bgColor }) {
  const productCardData = { ...item };
  console.log(productCardData);
  const { icon, title } = productCardData;

  let cssColors = CSS_COLOR_NAMES.map((color) => color.toLowerCase());
  let cardBackgroundColor = cssColors.includes(bgColor.toLowerCase()) ? bgColor : "CornflowerBlue";

  return (
    <div className={Classes.ProductCardWrapper}>
      <Link to={productCardData.action ? productCardData.action.target : null}>
        <div className={Classes.ProductCard} style={{ backgroundColor: `${cardBackgroundColor}` }}>
          <div className={Classes.Icon}>{getIconComponent({ icon: icon, color: "white", fontSize: "2.5rem", alignSelf: "left" })}</div>
          <p className={Classes.InnerTitle}>{title}</p>
        </div>
        <p className={Classes.OuterTitle}>{title}</p>
      </Link>
    </div>
  );
}
