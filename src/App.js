import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import StoreMain from "./containers/StoreMain/StoreMain";
import GroupDetailsPage from "./containers/GroupDetailsPage/GroupDetailsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={StoreMain} />
        <Redirect path="/store-main" to="/" />
        <Route path="/:pagename" component={GroupDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
