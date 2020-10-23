import React from "react";
import Navbar from "components/Navbar";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

describe("Navbar", () => {
  it("should render Navbar correctly", () => {
    const wrapper = shallow(<Navbar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.find(".user__image").length).toBe(1);
  });
});
