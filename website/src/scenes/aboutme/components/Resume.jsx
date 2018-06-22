import React, { Component } from "react";
import PropTypes from "prop-types";

class Resume extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <div>
        {title ? <h2>{title}</h2> : ""}
        <p>{text}</p>
      </div>
    );
  }
}

Resume.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default Resume;
