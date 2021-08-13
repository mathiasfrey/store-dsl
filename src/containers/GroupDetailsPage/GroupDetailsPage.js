import React from "react";
import PluginsPageMockedData from "../../data/plugins-page.json";
import { fetchGroupDetailsPageData } from "../../utils/api";

import GetPageComponent from "../../utils/getPageComponent";

import Classes from "./GroupDetailsPage.module.css";

export default function GroupDetailsPage({ targetPage }) {
  const [groupDetailsPageData, setGroupDetailsPageData] = React.useState("");

  React.useEffect(() => {
    fetchGroupDetailsPageData("/plugins-page")
      .then((data) => setGroupDetailsPageData(data.body))
      .catch(({ message }) => {
        console.log(message);
        setGroupDetailsPageData(PluginsPageMockedData.body);
      });
  }, []);
  if (groupDetailsPageData === undefined) {
    return (
      <div className={Classes.GroupDetailsPage}>
        <p>Loading...</p>
      </div>
    );
  } else {
    const itemsToDisplay = Object.values(groupDetailsPageData).map((item) =>
      GetPageComponent({
        componentType: item.__component,
        componentId: item.id,
        cardType: item.cardType ? item.cardType.cardTypes : null,
        groupingId: item.grouping ? item.grouping.id : null,
      })
    );
    console.log(itemsToDisplay);

    return <div className={Classes.GroupDetailsPage}>{itemsToDisplay}</div>;
  }
}
