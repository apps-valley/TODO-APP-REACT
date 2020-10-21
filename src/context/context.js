import React, { useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export const PeopleContext = React.createContext();

const defaultUser = {
  name: "Derek Trotter",
  title: "Independent Trader",
  country: "United Kingdom",
  salary: "3000",
  birth: "1/1/1960",
  id: uuidv4(),
};

export const PeopleContextProvider = (props) => {
  const [people, dispatch] = useReducer(reducer, [], () => {
    const dataFromLocalStorage = localStorage.getItem("people");
    return dataFromLocalStorage
      ? JSON.parse(dataFromLocalStorage)
      : [defaultUser];
  });

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  return (
    <PeopleContext.Provider value={{ people, dispatch }}>
      {props.children}
    </PeopleContext.Provider>
  );
};
