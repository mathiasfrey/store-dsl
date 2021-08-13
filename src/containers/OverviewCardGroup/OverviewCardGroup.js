import React from "react";
import { StoreMainDataConsumer } from "../../contexts/storeMainData";
import { fetchCardGroupItemsData } from "../../utils/api";
import CardGroupItemsDataMock from "../../data/groupings.json";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

import GetCardComponent from "../../utils/getCardComponent";

import Classes from "./OverviewCardGroup.module.css";

export default function OverviewCardGroup({ id, groupingId }) {
  let storeMainData = React.useContext(StoreMainDataConsumer);
  const [cardGroupItemsData, setCardGroupItemsData] = React.useState();
  // console.log("storeMainData", storeMainData);
  // console.log("cardGroupItemsData", cardGroupItemsData);
  React.useEffect(() => {
    fetchCardGroupItemsData(groupingId)
      .then((data) => setCardGroupItemsData(data))
      .catch(({ message }) => {
        console.log(message);
        setCardGroupItemsData(Object.values(CardGroupItemsDataMock).filter((item) => item.id === groupingId));
      });
  }, []);

  console.log("cardGroupItemsData mock");
  console.log(cardGroupItemsData);

  if (cardGroupItemsData === undefined || storeMainData === undefined) {
    return (
      <div className={Classes.OverviewCardGroup}>
        <p>Loading...</p>
      </div>
    );
  } else {
    const CardGroup = Object.values(storeMainData).filter((item) => item.id === id)[0];
    // console.log("================Card group=========================================================");
    // console.log(CardGroup);
    // console.log("===============>Card group items data");
    // console.log(cardGroupItemsData);
    const groupCardBackgroundColor = CardGroup.backgroundColor.color;
    const groupCardType = CardGroup.cardType.cardTypes;
    const groupingId = CardGroup.grouping.id;
    const groupTitle = CardGroup.title;
    const groupActionTitle = CardGroup.action ? CardGroup.action.title : null;
    const groupActionTarget = CardGroup.action ? CardGroup.action.target : null;

    //(cardGroupItemsData[0]
    const groupCardsToDisplay = Object.values(cardGroupItemsData.products).map((item) =>
      GetCardComponent({
        cardType: groupCardType,
        cardComponentId: item.id,
        bgColor: groupCardBackgroundColor,
        icon: item.icon,
        iconColor: item.iconColor ? item.iconColor.color : null,
        title: item.title,
        subtitle: item.subtitle,
      })
    );

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
          <div className={Classes.Cards}>{groupCardType === "pluginCard" ? groupCardsToDisplay.slice(0, 2) : groupCardsToDisplay}</div>
        </div>
      </div>
    );
  }
}
