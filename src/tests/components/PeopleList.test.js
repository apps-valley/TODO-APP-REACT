import React from "react";
import App from "../../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
  beforeEach(() => {
    render(<App />);
  });

  describe("when App is initialized", () => {
    it("then shows the heading people by default", () => {
      expect(screen.getByText(/People/i)).toBeTruthy();
    });

    it("then shows the default section", () => {
      const { container } = render(<App />);
      const numberOfSections = container.childNodes[1].childNodes.length;

      expect(numberOfSections).toBe(1);
    });
  });
});
