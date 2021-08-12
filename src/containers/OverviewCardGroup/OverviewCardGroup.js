import React from "react";
import { StoreMainDataConsumer } from "../../contexts/storeMainData";
import CardGroupItemsDataMock from "../../data/groupings.json";
import { fetchCardGroupItemsData } from "../../utils/api";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

import ProductCard from "../../components/ProductCard/ProductCard";
import PluginCard from "../../components/PluginCard/PluginCard";

import Classes from "./OverviewCardGroup.module.css";

export default function OverviewCardGroup({ id, groupingId }) {
  let storeMainData = React.useContext(StoreMainDataConsumer);
  const [cardGroupItemsData, setCardGroupItemsData] = React.useState();

  React.useEffect(() => {
    fetchCardGroupItemsData(groupingId)
      .then((data) => setCardGroupItemsData(data))
      .catch(({ message }) => {
        console.log(message);
        setCardGroupItemsData(Object.values(CardGroupItemsDataMock).filter((item) => item.id === groupingId));
      });
  }, []);

  if (cardGroupItemsData === undefined) {
    return (
      <div className={Classes.OverviewCardGroup}>
        <p>Loading...</p>
      </div>
    );
  } else {
    const CardGroup = Object.values(storeMainData).filter((item) => item.id === id)[0];
    console.log("===============Card group==========================");
    console.log(CardGroup);
    console.log("===============Card group items data===============");
    console.log(cardGroupItemsData);
    const groupCardBackgroundColor = CardGroup.backgroundColor.color;
    const groupCardType = CardGroup.cardType.cardTypes;
    const groupingId = CardGroup.grouping.id;
    const groupTitle = CardGroup.title.label;
    const groupActionTitle = CardGroup.title.actionTitle;
    const groupActionTarget = CardGroup.title.actionTarget;
    return (
      <div className={Classes.Container}>
        <div className={Classes.OverviewCardGroup}>
          <div className={Classes.OverviewCardGroupHeader}>
            <h4 className={Classes.GroupTitle}>{groupTitle}</h4>
            {groupActionTarget ? (
              <Link to={groupActionTarget}>
                {groupActionTitle}
                <IoIosArrowForward className={Classes.ArrowIcon} />
              </Link>
            ) : null}
          </div>
          {/* <div className={Classes.Cards}>
          {CardGroupItemsData.products.map((item) => (
            <ProductCard id={item.id} key={item.id} cardsBgColor={cardsBgColor} title={item.title} icon={item.icon} />
          ))}
        </div> */}
          <p>collection</p>
        </div>
      </div>
    );
  }
}
