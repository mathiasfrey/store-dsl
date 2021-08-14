import React from "react";
import { useLocation } from "react-router-dom";

import PluginsPageMockedData from "../../data/plugins-page.json";
import OpenAppsPageMockedData from "../../data/open-apps.json";
import { fetchGroupDetailsPageData } from "../../utils/api";

import GetPageComponent from "../../utils/getPageComponent";
import Classes from "./GroupDetailsPage.module.css";

const mockedDataImportMappping = {
  pluginspage: PluginsPageMockedData.body,
  openapps: OpenAppsPageMockedData.body,
};

export default function GroupDetailsPage() {
  const { pathname } = useLocation();
  const trimmedPathname = pathname.replace("-", "").replace("/", "");
  const [groupDetailsPageData, setGroupDetailsPageData] = React.useState("");

  React.useEffect(() => {
    fetchGroupDetailsPageData(pathname)
      .then((data) => setGroupDetailsPageData(data.body))
      .catch(({ message }) => {
        console.log(message);
        alert("API down. Mocked data used instead!");
        setGroupDetailsPageData(mockedDataImportMappping[trimmedPathname]);
      });
  }, []);
  if (groupDetailsPageData === undefined) {
    return (
      <div className={Classes.GroupDetailsPage}>
        <p className={Classes.Loading}>Loading...</p>
      </div>
    );
  } else {
    const itemsToDisplay = Object.values(groupDetailsPageData).map((item) => GetPageComponent({ item, order: groupDetailsPageData.indexOf(item) }));

    return <div className={Classes.GroupDetailsPage}>{itemsToDisplay}</div>;
  }
}
