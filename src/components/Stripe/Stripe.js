import React from "react";
import { StoreMainDataConsumer } from "../../contexts/storeMainData";
import { IoIosArrowBack } from "react-icons/io";
import Classes from "./Stripe.module.css";

export default function Stripe() {
  let storeMainData = React.useContext(StoreMainDataConsumer);
  // console.log("storeMainData", storeMainData);

  if (storeMainData === undefined) {
    return (
      <div className={Classes.Stripe}>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    const stripeData = Object.values(storeMainData).filter((item) => item.__component === "ui-components.stripe")[0];
    return (
      <div className={Classes.Stripe} style={{ backgroundColor: stripeData.backgroundColor.color }}>
        <div className={Classes.Container}>
          {stripeData.showBackBtn ? (
            <button type="button">
              <IoIosArrowBack />
            </button>
          ) : (
            <div className={Classes.BtnPlaceholder}></div>
          )}
          <h1>{stripeData.title}</h1>
        </div>
      </div>
    );
  }
}
