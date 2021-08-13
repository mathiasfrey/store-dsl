import React from "react";
import PluginsPageMockedData from "../../data/plugins-page.json";
import { fetchGroupDetailsPageData } from "../../utils/api";

export default function GroupDetailsPage({ targetPage }) {
  const [groupDetailsPageData, setGroupDetailsPageData] = React.useState("");

  React.useEffect(() => {
    fetchGroupDetailsPageData()
      .then((data) => setGroupDetailsPageData(data.body))
      .catch(({ message }) => {
        console.log(message);
        setGroupDetailsPageData(PluginsPageMockedData.body);
      });
  }, []);
  return <div>group details page</div>;
}
