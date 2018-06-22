import React, { Component } from "react";

import Resume from "./components/Resume";

const _title = "About me";
const _text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
euismod felis quis leo elementum mattis. Curabitur ut imperdiet nibh.
Vestibulum bibendum ipsum et nibh consectetur, eu auctor ex imperdiet.
Proin ligula tellus, bibendum at nisi ac, sodales pharetra lacus.
Nunc est non tellus luctus sollicitudin. Morbi consequat enim eget
sollicitudin cursus. Aenean sed eros rutrum, tempor risus in, ultrices
quam. Nunc venenatis diam eu ultricies ultrices.`;

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Resume title={_title} text={_text} />
      </div>
    );
  }
}

export default AboutMe;
