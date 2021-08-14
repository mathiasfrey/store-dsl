import React from "react";
import { getIconComponent } from "../../utils/getIconComponent";
import CSS_COLOR_NAMES from "../../utils/cssColorNames";

import Classes from "./PluginCard.module.css";

export default function PluginCard({ item, bgColor }) {
  const pluginCardData = { ...item };
  const { icon, title, subtitle } = pluginCardData;
  const iconColor = pluginCardData.iconColor ? pluginCardData.iconColor.color : "white";

  let cssColors = CSS_COLOR_NAMES.map((color) => color.toLowerCase());
  let bgColorValidated = cssColors.includes(bgColor.toLowerCase()) ? bgColor : "White";
  let iconColorValidated = cssColors.includes(iconColor.toLowerCase()) ? iconColor : "DodgerBlue";

  return (
    <div className={Classes.PluginCardWrapper}>
      <div className={Classes.PluginCard} style={{ backgroundColor: `${bgColorValidated}` }}>
        <div className={Classes.Icon}>{getIconComponent({ icon: icon, color: `${iconColorValidated}`, fontSize: "2.5rem", alignSelf: "left" })}</div>
        <p className={Classes.Title}>{title}</p>
        <p className={Classes.Subtitle}>
          {subtitle.slice(0, 40)}
          {subtitle.length > 40 ? "..." : null}
        </p>
      </div>
    </div>
  );
}
