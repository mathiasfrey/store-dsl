import React from "react";
import { useParams } from "react-router-dom";

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
  const { pagename } = useParams();
  const trimmedPagename = pagename.replace("-", "").replace("/", "");
  const [groupDetailsPageData, setGroupDetailsPageData] = React.useState("");
  const [apiError, setApiError] = React.useState(false);

  React.useEffect(() => {
    fetchGroupDetailsPageData(pagename)
      .then((data) => setGroupDetailsPageData(data.body))
      .catch(({ message }) => {
        console.log(message);
        setApiError(true);
        setGroupDetailsPageData(mockedDataImportMappping[trimmedPagename]);
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
