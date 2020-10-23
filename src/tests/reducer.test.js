import { reducer, ADD_PERSON, EDIT_PERSON, defaultUser } from "context/reducer";
import expect from "expect";
import people from "./fixtures/people";

describe("people reducer", () => {
  it("should add new person", () => {
    const person = {
      name: "New Personr",
      title: "New Title",
      country: "United Kingdom",
      salary: "35000",
      birth: "1940-01-01",
      id: expect.any(String),
    };
    const action = {
      type: ADD_PERSON,
      person,
    };

    const state = reducer(people, action);
    expect(state).toEqual([...people, person]);
  });

  it("should edit a person", () => {
    const title = "Superhero";
    const action = {
      type: "EDIT_PERSON",

      person: {
        title,
        id: people[0].id,
      },
    };
    const state = reducer(people, action);
    expect(state[0].title).toBe(title);
  });
});
