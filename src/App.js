import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import StoreMain from "./containers/StoreMain/StoreMain";
import GroupDetailsPage from "./containers/GroupDetailsPage/GroupDetailsPage";

function App() {
  const { pathname } = useLocation();
  const detailPagePath = (pathname) => {
    if (pathname === "/" || pathname === "/store-main") {
      return "/details-page";
    } else return pathname;
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={StoreMain} />
        <Route path={detailPagePath(pathname)} component={GroupDetailsPage} />
        <Redirect path="/store-main" to="/" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
