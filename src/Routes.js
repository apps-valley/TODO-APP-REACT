import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreatePersonPage from "./pages/CreatePersonPage";
import EditPersonPage from "./pages/EditPersonPage";
import HomePage from "./pages/HomePage";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true}></Route>
      <Route path="/create" component={CreatePersonPage}></Route>
      <Route path="/edit/:id" component={EditPersonPage}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
