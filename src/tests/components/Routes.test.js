import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../../App";

describe("Routes", () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
  });

  it("then shows edit page when clicked on an edit button", () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Edit/i), leftClick);
    expect(screen.getByText(/Edit employee/i)).toBeInTheDocument();
  });

  it("then shows home page when clicked on the cancel button", () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Cancel/i), leftClick);
    expect(screen.getByText(/People/i)).toBeInTheDocument();
  });

  it("then shows create page when clicked on the Add Employee button", () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Add Employee/i), leftClick);
    expect(screen.getByText(/Add a new employee/i)).toBeInTheDocument();
  });
});
