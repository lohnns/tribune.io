import React from "react";
import { render } from "enzyme";

import Resume from "./Resume";

describe("Component test suite - Resume", () => {
  it("is a div with classes", () => {
    const wrapper = render(<Resume />);
    expect(wrapper.is("div")).to.equal(true);
  })

  it("should display a text", () => {
    const text = "Hello world!";
    const wrapper = render(<Resume text={text}/>);
    expect(wrapper.text()).to.contain(text);
  })
});
