import React from "react";
import { Switch, Route } from "react-router-dom";
import StoreMain from "./containers/StoreMain/StoreMain";
import GroupDetailsPage from "./containers/GroupDetailsPage/GroupDetailsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={StoreMain} />
        <Route path="/plugins-page" component={GroupDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
