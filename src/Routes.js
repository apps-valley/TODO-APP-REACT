import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreatePersonPage from "./CreatePersonPage";
import EditPersonPage from "./EditPersonPage";
import Homepage from "./Homepage";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Homepage} exact={true}></Route>
      <Route path="/create" component={CreatePersonPage}></Route>
      <Route path="/edit/:id" component={EditPersonPage}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
