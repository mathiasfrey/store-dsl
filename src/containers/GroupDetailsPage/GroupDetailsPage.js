import React from "react";
import { useLocation } from "react-router-dom";

import PluginsPageMockedData from "../../data/plugins-page.json";
import CardsPageMockedData from "../../data/cards-page.json";
import OpenAppsPageMockedData from "../../data/open-apps.json";
import { fetchGroupDetailsPageData } from "../../utils/api";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import GetPageComponent from "../../utils/getPageComponent";
import Classes from "./GroupDetailsPage.module.css";

const mockedDataImportMappping = {
  pluginspage: PluginsPageMockedData.body,
  openapps: OpenAppsPageMockedData.body,
  cardspage: CardsPageMockedData.body,
};

export default function GroupDetailsPage() {
  const { pathname } = useLocation();
  const trimmedPathname = pathname.replace("-", "").replace("/", "");
  const [groupDetailsPageData, setGroupDetailsPageData] = React.useState("");
  const [apiError, setApiError] = React.useState(false);

  React.useEffect(() => {
    fetchGroupDetailsPageData(pathname)
      .then((data) => setGroupDetailsPageData(data.body))
      .catch(({ message }) => {
        console.log(message);
        setApiError(true);
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

    return (
      <div className={Classes.GroupDetailsPage}>
        {apiError ? <ErrorMessage errorText={"Live data not available for this page. Mocked data used instead"} /> : null}
        {itemsToDisplay}
      </div>
    );
  }
}
