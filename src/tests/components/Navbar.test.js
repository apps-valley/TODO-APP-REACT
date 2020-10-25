import React from "react";
import { Navbar } from "components";
import { render, screen } from "@testing-library/react";

describe("<Navbar />", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  describe("when Navbar is initialized", () => {
    it("then shows the admin user", () => {
      expect(screen.getByText(/Admin/i)).toBeTruthy();
    });

    it("then has navbar", () => {
      const { container } = render(<Navbar />);
      const hasNavbarClass = container.firstChild.classList.contains("nav");
      expect(hasNavbarClass).toBe(true);
    });
  });
});
