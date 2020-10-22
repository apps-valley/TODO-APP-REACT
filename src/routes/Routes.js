import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage, EditPersonPage, CreatePersonPage, LostPage } from "pages";
import { HomeRoute, EditRoute, CreateRoute, PageNotFound } from "./routeNames";
import { Navbar } from "components";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <main className="container">
      <Switch>
        <Route path={HomeRoute} component={HomePage} exact={true}></Route>
        <Route path={CreateRoute} component={CreatePersonPage}></Route>
        <Route path={`${EditRoute}/:id`} component={EditPersonPage}></Route>
        <Route path={PageNotFound} component={LostPage}></Route>
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
