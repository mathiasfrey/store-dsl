import React from "react";
import { getIconComponent } from "../../utils/getIconComponent";
import CSS_COLOR_NAMES from "../../utils/cssColorNames";

import Classes from "./PluginCard.module.css";

export default function PluginCard({ id, icon, title, subtitle, bgColor }) {
  let cssColors = CSS_COLOR_NAMES.map((color) => color.toLowerCase());
  let cardBackgroundColor = cssColors.includes(bgColor.toLowerCase()) ? bgColor : "White";
  let hardCodedBackgroundColor = "white";
  return (
    <div className={Classes.PluginCardWrapper}>
      <div className={Classes.PluginCard} style={{ backgroundColor: `${hardCodedBackgroundColor}` }}>
        <div className={Classes.Icon}>{getIconComponent({ icon: icon, color: `${cardBackgroundColor}`, fontSize: "2.5rem", alignSelf: "left" })}</div>
        <p className={Classes.Title}>{title}</p>
        <p className={Classes.Subtitle}>{subtitle.slice(0, 30) + "."}</p>
      </div>
    </div>
  );
}
