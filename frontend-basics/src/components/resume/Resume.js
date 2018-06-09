import React from "react";

import "./Resume.scss";

const Resume = ( {content} ) => (
  <div className="resume">
    <span className="paragraph">{content}</span>
  </div>
);

export default Resume;
