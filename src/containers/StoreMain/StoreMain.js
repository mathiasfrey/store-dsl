import React from "react";
import StoreMainDataMock from "../../data/store-main.json";
import { fetchStoreMainData } from "../../utils/api";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import GetPageComponent from "../../utils/getPageComponent";
import Classes from "./StoreMain.module.css";

export default function StoreMain() {
  const [storeMainData, setStoreMainData] = React.useState("");
  const [apiError, setApiError] = React.useState(false);

  React.useEffect(() => {
    fetchStoreMainData()
      .then((data) => {
        if (data === "TIME_OUT") {
          console.log(data);
          setStoreMainData(StoreMainDataMock.body);
        } else {
          setStoreMainData(data.body);
        }
      })
      .catch(({ message }) => {
        console.log(message);
        setApiError(true);
        setStoreMainData(StoreMainDataMock.body);
      });
  }, []);

  if (storeMainData === undefined) {
    return (
      <div className={Classes.StoreMain}>
        <p className={Classes.Loading}>Loading...</p>
      </div>
    );
  } else {
    const itemsToDisplay = Object.values(storeMainData).map((item) =>
      GetPageComponent({ item, order: storeMainData.indexOf(item) })
    );
    return (
      <div className={Classes.StoreMain}>
        {apiError ? (
          <ErrorMessage
            errorText={
              "Live data not available for this page. Mocked data used instead"
            }
          />
        ) : null}
        {itemsToDisplay}
      </div>
    );
  }
}
