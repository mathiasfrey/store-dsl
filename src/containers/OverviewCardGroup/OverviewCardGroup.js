import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchCardGroupItemsData } from "../../utils/api";
import groupings1MockedData from "../../data/groupings1.json";
import groupings2MockedData from "../../data/groupings2.json";
import groupings3MockedData from "../../data/groupings3.json";
import groupings4MockedData from "../../data/groupings4.json";

import { IoIosArrowForward } from "react-icons/io";
import GetCardComponent from "../../utils/getCardComponent";
import Classes from "./OverviewCardGroup.module.css";

const mockedDataImportMappping = {
  groupings1MockedData: groupings1MockedData,
  groupings2MockedData: groupings2MockedData,
  groupings3MockedData: groupings3MockedData,
  groupings4MockedData: groupings4MockedData,
};

export default function OverviewCardGroup({ item }) {
  const location = useLocation();
  //console.log("cardGroup", item);
  const cardGroupData = { ...item };
  const groupCardBackgroundColor = cardGroupData.backgroundColor ? cardGroupData.backgroundColor.color : null;
  const groupCardType = cardGroupData.cardType.cardTypes;
  const groupingId = cardGroupData.grouping.id;
  const groupTitle = cardGroupData.title;
  const groupActionTitle = cardGroupData.action ? cardGroupData.action.title : null;
  const groupActionTarget = cardGroupData.action ? cardGroupData.action.target : null;

  const [cardGroupItemsData, setCardGroupItemsData] = React.useState();

  React.useEffect(() => {
    fetchCardGroupItemsData({ groupingId })
      .then((data) => setCardGroupItemsData(data))
      .catch((error) => {
        console.log(`Live data not available for the ${groupTitle} product group. Mocked data used instead!`);
        setCardGroupItemsData(mockedDataImportMappping[`groupings${groupingId}MockedData`]);
      });
  }, []);

  if (cardGroupItemsData === undefined) {
    return (
      <div className={Classes.OverviewCardGroup}>
        <p className={Classes.Loading}>Loading...</p>
      </div>
    );
  } else {
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
          <div className={Classes.Cards} style={{ marginTop: `${groupCardType === "pluginCard" && location.pathname !== "/" ? "-3.5em" : "0em"}` }}>
            {groupCardType === "pluginCard" && location.pathname === "/" ? groupCardsToDisplay.slice(0, 2) : groupCardsToDisplay}
          </div>
        </div>
      </div>
    );
  }
}
