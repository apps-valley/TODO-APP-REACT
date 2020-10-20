import React, { useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export const PeopleContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      const { name, title, salary, country, birth } = action.person;
      const person = {
        name,
        title,
        salary,
        country,
        birth,
        id: uuidv4(),
      };
      return [...state, person];
    case "EDIT_PERSON":
      const updatedPerson = action.person;
      const updatedPeople = state.map((person) => {
        if (person.id === updatedPerson.id) {
          return updatedPerson;
        }
        return person;
      });

      return updatedPeople;
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
