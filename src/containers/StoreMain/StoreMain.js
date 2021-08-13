import React from "react";
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
        alert("API down. Mocked data used instead!");
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
    const itemsToDisplay = Object.values(storeMainData).map((item) => GetPageComponent({ item, order: storeMainData.indexOf(item) }));
    return <div className={Classes.StoreMain}>{itemsToDisplay}</div>;
  }
}
