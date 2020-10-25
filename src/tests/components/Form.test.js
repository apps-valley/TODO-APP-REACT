import React from "react";
import { Form } from "components";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { PeopleContext } from "context";
import { BrowserRouter } from "react-router-dom";
import people from "../fixtures/people";

const setup = () => {
  const utils = render(
    <PeopleContext.Provider value={{ people }}>
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    </PeopleContext.Provider>
  );
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

describe("<Form />", () => {
  it("should have the correct input elements and initial values", () => {
    const { getByTestId } = setup();
    expect(getByTestId("name").value).toBe("");
    expect(getByTestId("title").value).toBe("");
    expect(getByTestId("birth").value).toBe("");
    expect(getByTestId("salary").value).toBe("");
    expect(getByTestId("country").value).toBe("Austria");
  });

  it("should change the name value", () => {
    const { inputName } = setup();
    fireEvent.change(inputName, { target: { value: "Marko Polo" } });
    expect(inputName.value).toBe("Marko Polo");
  });

  it("should change the birth value", () => {
    const { inputBirth } = setup();
    fireEvent.change(inputBirth, { target: { value: "1960-01-01" } });
    expect(inputBirth.value).toBe("1960-01-01");
  });

  it("should change the title value", () => {
    const { inputTitle } = setup();
    fireEvent.change(inputTitle, { target: { value: "Explorer" } });
    expect(inputTitle.value).toBe("Explorer");
  });

  it("should change the salary value", () => {
    const { inputSalary } = setup();
    fireEvent.change(inputSalary, { target: { value: 2000 } });
    expect(inputSalary.value).toBe("2000");
  });

  it("should change the country value", () => {
    const { getAllByTestId, inputCountry } = setup();
    fireEvent.change(inputCountry, { target: { value: "Portugal" } });
    const options = getAllByTestId("select-option");
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });
});
