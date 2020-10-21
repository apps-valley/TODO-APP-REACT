import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreatePersonPage from "../pages/CreatePersonPage";
import EditPersonPage from "../pages/EditPersonPage";
import HomePage from "../pages/HomePage";
import { HomeRoute, EditRoute, CreateRoute } from "./routeNames";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={HomeRoute} component={HomePage} exact={true}></Route>
      <Route path={CreateRoute} component={CreatePersonPage}></Route>
      <Route path={`${EditRoute}/:id`} component={EditPersonPage}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
