import React from "react";
import { StoreMainDataProvider } from "../../contexts/storeMainData";
import StoreMainDataMock from "../../data/store-main.json";
import { fetchStoreMainData } from "../../utils/api";

import GetPageComponent from "../../utils/getPageComponent";

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

  if (storeMainData === undefined) {
    return (
      <div className={Classes.StoreMain}>
        <p>Loading...</p>
      </div>
    );
  } else {
    const itemsToDisplay = Object.values(storeMainData).map((item) =>
      GetPageComponent({
        componentType: item.__component,
        componentId: item.id,
        cardType: item.cardType ? item.cardType.cardTypes : null,
        groupingId: item.grouping ? item.grouping.id : null,
      })
    );
    return (
      <StoreMainDataProvider value={storeMainData}>
        <div className={Classes.StoreMain}>{itemsToDisplay}</div>
      </StoreMainDataProvider>
    );
  }
}
