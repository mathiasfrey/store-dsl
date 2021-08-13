import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Classes from "./Stripe.module.css";

export default function Stripe({ item }) {
  const stripeData = { ...item };
  return (
    <div className={Classes.Stripe} style={{ backgroundColor: stripeData.backgroundColor.color }}>
      <div className={Classes.Container}>
        {stripeData.showBackBtn ? (
          <Link to={`/${stripeData.backTarget}`}>
            <IoIosArrowBack />
          </Link>
        ) : (
          <div className={Classes.BtnPlaceholder}></div>
        )}
        <h1>{stripeData.title}</h1>
      </div>
    </div>
  );
}
