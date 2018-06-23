import React from "react";
import { render, shallow } from "enzyme";

import App from "./App";
import AboutMe from "./scenes/aboutme/AboutMe";

describe("Component test suite - App", () => {
  it("contains a main title", () => {
    const wrapper = render(<App />);
    expect(wrapper.find("h1")).to.have.length(1);
  });

  it("contains an AboutMe component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AboutMe)).to.have.length(1);
  });
});
