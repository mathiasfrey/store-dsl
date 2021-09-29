import React from "react";
import { BASE_URL } from "../../utils/api";

import Classes from "./FeatureCard.module.css";

export default function FeatureCard({ item, order }) {
  const featureCardData = { ...item };
  const backgroundColor = featureCardData.backgroundColor.color;
  const { productImage, title, subtitle } = featureCardData.product;
  return (
    <div className={Classes.Container}>
      <div
        className={Classes.FeatureCard}
        style={{
          backgroundColor: backgroundColor,
          marginTop: `${order === 1 ? "-2.5em" : "1em"}`,
        }}
      >
        <div className={Classes.FeatureCardBodyWrapper}>
          <div
            className={Classes.FeatureCardBody}
            style={{ backgroundImage: `url(${BASE_URL}${productImage.url})` }}
          ></div>
        </div>
        <div className={Classes.FeatureCardFooter}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
