import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage, EditPersonPage, CreatePersonPage } from "pages";
import { HomeRoute, EditRoute, CreateRoute } from "./routeNames";
import { Navbar } from "components";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <main className="container">
      <Switch>
        <Route path={HomeRoute} component={HomePage} exact={true}></Route>
        <Route path={CreateRoute} component={CreatePersonPage}></Route>
        <Route path={`${EditRoute}/:id`} component={EditPersonPage}></Route>
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
