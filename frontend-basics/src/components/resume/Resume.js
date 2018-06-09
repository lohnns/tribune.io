import React from "react";

import "./Resume.css";

const Resume = ({ content }) => (
  <div className="resume">
    <span className="paragraph">
      {content === undefined ? mockContent() : content}
    </span>
    <span className="paragraph">
      {content === undefined ? mockContent() : content}
    </span>
  </div>
);

function mockContent() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur orci purus, in egestas lectus tempus at. Proin ac ex a metus sollicitudin elementum. Phasellus gravida nisi at massa pharetra ultricies. Duis tempor purus libero, sed tempor sapien viverra non. Nullam bibendum orci eu tortor sollicitudin, in cursus nisi rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis semper pharetra lacus, sit amet fermentum ipsum ullamcorper nec. Integer vehicula, ipsum in dapibus luctus, libero nibh rhoncus diam, sit amet tincidunt nibh nibh sit amet magna.";
}

export default Resume;
