import React from "react";
import { useLocation } from "react-router-dom";

import PluginsPageMockedData from "../../data/plugins-page.json";
import { fetchGroupDetailsPageData } from "../../utils/api";

import GetPageComponent from "../../utils/getPageComponent";
import Classes from "./GroupDetailsPage.module.css";

export default function GroupDetailsPage() {
  const location = useLocation();
  const [groupDetailsPageData, setGroupDetailsPageData] = React.useState("");

  React.useEffect(() => {
    fetchGroupDetailsPageData(location.pathname)
      .then((data) => setGroupDetailsPageData(data.body))
      .catch(({ message }) => {
        console.log(message);
        alert("API down. Mocked data used instead!");
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
    console.log("groupDetailsPageData");
    console.log(groupDetailsPageData);
    const itemsToDisplay = Object.values(groupDetailsPageData).map((item) => GetPageComponent({ item, order: groupDetailsPageData.indexOf(item) }));

    return <div className={Classes.GroupDetailsPage}>{itemsToDisplay}</div>;
  }
}
