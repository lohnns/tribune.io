import React from "react";
import { shallow } from "enzyme";

import AboutMe from "./AboutMe";
import Resume from "./components/Resume";

describe("Scene test suite - AboutMe", () => {
  it("should display a Resume component", () => {
    const wrapper = shallow(<AboutMe />);
    expect(wrapper.find(Resume)).to.have.length(1);
  });
});
