import React from "react";
import { StoreMainDataConsumer } from "../../contexts/storeMainData";
import { BASE_URL } from "../../utils/api";

import Classes from "./FeatureCard.module.css";

const placeholderBgUrl = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

export default function FeatureCard({ id }) {
  let storeMainData = React.useContext(StoreMainDataConsumer);

  if (storeMainData === undefined) {
    return (
      <div className={Classes.FeatureCard}>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    const FeatureCard = Object.values(storeMainData).filter((item) => item.id === id)[0];
    const isFirstOverviewItem = Object.values(storeMainData).findIndex((item) => item.id === id) === 1 ? true : false;
    const backgroundColor = FeatureCard.backgroundColor.color;
    const { productImage, title, subtitle } = FeatureCard.product;
    return (
      <div className={Classes.Container}>
        <div className={Classes.FeatureCard} style={{ backgroundColor: backgroundColor, marginTop: `${isFirstOverviewItem ? "-1.5em" : "1em"}` }}>
          <div className={Classes.FeatureCardBody} style={{ backgroundImage: `url(${BASE_URL}${productImage.url})` }}></div>
          <div className={Classes.FeatureCardFooter}>
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    );
  }
}
