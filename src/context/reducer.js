import { v4 as uuidv4 } from "uuid";

const ADD_PERSON = "ADD_PERSON";
const EDIT_PERSON = "EDIT_PERSON";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PERSON:
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
    case EDIT_PERSON:
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
