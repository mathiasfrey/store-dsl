import React from "react";
import { useLocation } from "react-router-dom";
import { fetchCardGroupItemsData } from "../../utils/api";
import CardGroupItemsDataMock from "../../data/groupings.json";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

import GetCardComponent from "../../utils/getCardComponent";

import Classes from "./OverviewCardGroup.module.css";

export default function OverviewCardGroup({ item }) {
  const location = useLocation();
  //console.log(location.pathname);
  const cardGroupData = { ...item };
  const groupCardBackgroundColor = cardGroupData.backgroundColor.color;
  const groupCardType = cardGroupData.cardType.cardTypes;
  const groupingId = cardGroupData.grouping.id;
  const groupTitle = cardGroupData.title;
  const groupActionTitle = cardGroupData.action ? cardGroupData.action.title : null;
  const groupActionTarget = cardGroupData.action ? cardGroupData.action.target : null;

  const [cardGroupItemsData, setCardGroupItemsData] = React.useState();
  React.useEffect(() => {
    fetchCardGroupItemsData()
      .then((data) => setCardGroupItemsData(data.filter((item) => item.id === groupingId)[0]))
      .catch(({ message }) => {
        console.log(message);

        setCardGroupItemsData(CardGroupItemsDataMock.filter((item) => item.id === groupingId)[0]);
      });
  }, []);

  if (cardGroupItemsData === undefined) {
    return (
      <div className={Classes.OverviewCardGroup}>
        <p className={Classes.Loading}>Loading...</p>
      </div>
    );
  } else {
    //console.log("cardGroupItemsData", cardGroupItemsData);
    const groupCardsToDisplay = Object.values(cardGroupItemsData.products).map((item) =>
      GetCardComponent({
        cardType: groupCardType,
        bgColor: groupCardBackgroundColor,
        item,
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
          <div className={Classes.Cards}>{groupCardType === "pluginCard" && location.pathname == "/" ? groupCardsToDisplay.slice(0, 2) : groupCardsToDisplay}</div>
        </div>
      </div>
    );
  }
}
