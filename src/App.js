import React from "react";
import "./App.css";
import Routes from "./Routes";
import { PeopleContextProvider } from "./context";
function App() {
  return (
    <PeopleContextProvider>
      <Routes />
    </PeopleContextProvider>
  );
}

export default App;
