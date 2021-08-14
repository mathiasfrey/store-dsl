import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Classes from "./Stripe.module.css";

export default function Stripe({ item }) {
  const stripeData = { ...item };
  return (
    <div className={Classes.Stripe} style={{ backgroundColor: stripeData.backgroundColor.color }}>
      <div className={Classes.Container}>
        <div className={Classes.StripeHeader}>
          {stripeData.showBackBtn ? (
            <Link to={`/${stripeData.backTarget}`}>
              <IoIosArrowBack />
            </Link>
          ) : (
            <div className={Classes.BtnPlaceholder}></div>
          )}

          {stripeData.action ? (
            <div className={Classes.StripeNotification}>
              <Link to={stripeData.action.target}>
                {stripeData.action.title}
                <div className={Classes.StripeNotificationDot}></div>
              </Link>
            </div>
          ) : null}
        </div>

        <h1>{stripeData.title}</h1>
      </div>
    </div>
  );
}
