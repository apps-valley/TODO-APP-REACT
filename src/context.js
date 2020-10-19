import React, { useReducer, useEffect } from "react";

export const PeopleContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return [...state, { name: action.people.name }];
    default:
      throw new Error("No such action");
  }
};

export const PeopleContextProvider = (props) => {
  const [people, dispatch] = useReducer(reducer, [], () => {
    const dataFromLocalStorage = localStorage.getItem("people");
    return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : [];
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
