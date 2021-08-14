import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getIconComponent } from "../../utils/getIconComponent";
import CSS_COLOR_NAMES from "../../utils/cssColorNames";

import Classes from "./ProductCard.module.css";

export default function ProductCard({ item, bgColor }) {
  const { pathname } = useLocation();
  const productCardData = { ...item };
  const { icon, title } = productCardData;

  let cssColors = CSS_COLOR_NAMES.map((color) => color.toLowerCase());
  let cardBackgroundColor = cssColors.includes(bgColor.toLowerCase()) ? bgColor : "CornflowerBlue";

  const getProductCard = () => (
    <React.Fragment>
      <div className={Classes.ProductCard} style={{ backgroundColor: `${cardBackgroundColor}` }}>
        <div className={Classes.Icon}>{getIconComponent({ icon: icon, color: "white", fontSize: "2.5rem", alignSelf: "left" })}</div>
        <p className={Classes.InnerTitle}>{title}</p>
      </div>
      <p className={Classes.OuterTitle}>{title}</p>
    </React.Fragment>
  );

  return <div className={Classes.ProductCardWrapper}>{pathname === "/" ? <Link to={productCardData.action ? productCardData.action.target : "/"}>{getProductCard()}</Link> : getProductCard()}</div>;
}
