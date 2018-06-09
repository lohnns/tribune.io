import React from "react";
import { expect } from "chai";
import { render } from "enzyme";

import Resume from "./Resume";

describe("Component test suite - Resume ", () => {
  it("is a div .resume", () => {
    const wrapper = render(<Resume />);
    expect(wrapper.is("div.resume")).to.equal(true);
  });

  it("contains a paragraph", () => {
    const wrapper = render(<Resume />);
    expect(wrapper.find("span.paragraph")).to.have.length(1);
  });

  it("should display the content", () => {
    const wrapper = render(<Resume content="Hello world!" />);
    expect(wrapper.text()).to.contain("Hello world!");
  });
});
