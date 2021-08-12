import React from "react";
import { StoreMainDataProvider } from "../../contexts/storeMainData";
import StoreMainDataMock from "../../data/store-main.json";
import { fetchStoreMainData } from "../../utils/api";

import Stripe from "../../components/Stripe/Stripe";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import OverviewCardGroup from "../OverviewCardGroup/OverviewCardGroup";
import ProductCard from "../../components/ProductCard/ProductCard";
import PluginCard from "../../components/PluginCard/PluginCard";

import Classes from "./StoreMain.module.css";

export default function StoreMain() {
  const [storeMainData, setStoreMainData] = React.useState("");

  React.useEffect(() => {
    fetchStoreMainData()
      .then((data) => setStoreMainData(data.body))
      .catch(({ message }) => {
        console.log(message);
        setStoreMainData(StoreMainDataMock.body);
      });
  }, []);

  const getComponent = ({ componentType, componentId, cardType = null, groupingId }) => {
    switch (componentType) {
      case "ui-components.stripe":
        return <Stripe id={componentId} key={componentId} />;
      case "ui-components.product-card":
        if (cardType === "featureCard") {
          return <FeatureCard id={componentId} key={componentId} />;
        } else if (cardType === "productCard") {
          return <ProductCard id={componentId} key={componentId} />;
        } else if (cardType === "pluginCard") {
          return <PluginCard id={componentId} key={componentId} />;
        } else {
          return null;
        }
      case "ui-components.product-card-collection":
        return <OverviewCardGroup id={componentId} groupingId={groupingId} key={componentId} />;
      default:
        return null;
    }
  };

  if (storeMainData === undefined) {
    return (
      <div className={Classes.StoreMain}>
        <p>Loading...</p>
      </div>
    );
  } else {
    const itemsToDisplay = Object.values(storeMainData).map((item) =>
      getComponent({
        componentType: item.__component,
        componentId: item.id,
        cardType: item.cardType ? item.cardType.cardTypes : null,
        groupingId: item.grouping ? item.grouping.id : null,
      })
    );
    console.log(itemsToDisplay);
    return (
      <StoreMainDataProvider value={storeMainData}>
        <div className={Classes.StoreMain}>{itemsToDisplay}</div>
      </StoreMainDataProvider>
    );
  }
}
