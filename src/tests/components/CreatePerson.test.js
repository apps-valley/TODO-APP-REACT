import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PeopleContext } from "context";
import { Router, Route, Switch } from "react-router-dom";
import people from "../fixtures/people";
import { createMemoryHistory } from "history";
import { HomePage, CreatePersonPage } from "pages";

const setup = () => {
  const history = createMemoryHistory();
  const dispatch = jest.fn();

  const utils = render(
    <PeopleContext.Provider value={{ people, dispatch }}>
      <Router history={history}>
        <Switch>
          <Route path="/create" component={CreatePersonPage} />
          <Route path="/" component={HomePage} exact={true} />
        </Switch>
      </Router>
    </PeopleContext.Provider>
  );
  const button = utils.getByText(/Add Employee/);
  fireEvent.click(button);

  const inputName = utils.getByTestId("name");
  const inputTitle = utils.getByTestId("title");
  const inputCountry = utils.getByTestId("country");
  const inputSalary = utils.getByTestId("salary");
  const inputBirth = utils.getByTestId("birth");

  return {
    inputName,
    inputTitle,
    inputCountry,
    inputBirth,
    inputSalary,
    ...utils,
  };
};

describe("Creating of Employer", () => {
  it("then has the correct input elements and initial values", () => {
    const {
      inputCountry,
      inputBirth,
      inputSalary,
      inputTitle,
      inputName,
    } = setup();

    expect(inputName.value).toBe("");
    expect(inputTitle.value).toBe("");
    expect(inputBirth.value).toBe("");
    expect(inputSalary.value).toBe("");
    expect(inputCountry.value).toBe("Austria");
  });

  it("then changes the name value", () => {
    const { inputName } = setup();
    fireEvent.change(inputName, { target: { value: "Marko Polo" } });
    expect(inputName.value).toBe("Marko Polo");
  });

  it("then changes the birth value", () => {
    const { inputBirth } = setup();
    fireEvent.change(inputBirth, { target: { value: "1960-01-01" } });
    expect(inputBirth.value).toBe("1960-01-01");
  });

  it("then changes the title value", () => {
    const { inputTitle } = setup();
    fireEvent.change(inputTitle, { target: { value: "Explorer" } });
    expect(inputTitle.value).toBe("Explorer");
  });

  it("then changes the salary value", () => {
    const { inputSalary } = setup();
    fireEvent.change(inputSalary, { target: { value: 2000 } });
    expect(inputSalary.value).toBe("2000");
  });

  it("then changes the country value", () => {
    const { getAllByTestId, inputCountry } = setup();
    fireEvent.change(inputCountry, { target: { value: "Portugal" } });
    const options = getAllByTestId("select-option");
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });

  it("then redirects to home when cancel is clicked", () => {
    const { getByText } = setup();
    fireEvent.click(getByText(/Cancel/i));
    expect(screen.getByText(/People/i)).toBeTruthy();
  });

  it("then redirects to home when submit is clicked", () => {
    const { getByText } = setup();
    fireEvent.click(getByText(/Add Employee/i));
    expect(screen.getByText(/People/i)).toBeTruthy();
  });
});
