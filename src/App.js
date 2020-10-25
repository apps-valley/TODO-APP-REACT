import React from "react";
import "./stylesheets/App.scss";
import Routes from "./routes/Routes";
import { PeopleContextProvider } from "context";
function App() {
  return (
    <PeopleContextProvider>
      <Routes />
    </PeopleContextProvider>
  );
}

export default App;
