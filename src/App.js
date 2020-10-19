import React, { useReducer } from "react";
import "./App.css";
import Form from "./Form";
import People from "./People";
import { PeopleContextProvider } from "./context";
function App() {
  return (
    <PeopleContextProvider>
      <div>
        <Form />
        <People />
      </div>
    </PeopleContextProvider>
  );
}

export default App;
