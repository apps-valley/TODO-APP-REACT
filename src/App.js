import React from "react";
import "./stylesheets/App.css";
import Routes from "./routes/Routes";
import { PeopleContextProvider } from "./context/context";
function App() {
  return (
    <PeopleContextProvider>
      <Routes />
    </PeopleContextProvider>
  );
}

export default App;
