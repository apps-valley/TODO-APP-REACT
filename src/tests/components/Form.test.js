import React from "react";
import { Form } from "components";
import { render } from "@testing-library/react";
import { PeopleContext } from "context";
import { BrowserRouter } from "react-router-dom";
import people from "../fixtures/people";

describe("<Form />", () => {
  it("should have the correct input elements and initial values", () => {
    const { getByTestId } = render(
      <PeopleContext.Provider value={{ people: people }}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </PeopleContext.Provider>
    );
    expect(getByTestId("name").value).toBe("");
    expect(getByTestId("title").value).toBe("");
    expect(getByTestId("birth").value).toBe("");
    expect(getByTestId("salary").value).toBe("");
    expect(getByTestId("country").value).toBe("Austria");
  });
});
