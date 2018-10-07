import React, { Component } from "react";
import Typed from "typed.js";
import PropType from "prop-types";

class Page extends Component {
  state = {};

  componentDidMount() {
    /* eslint-disable no-new */
    new Typed("#page", {
      strings: this.props.strings,
      typeSpeed: 10,
      showCursor: false,
      onComplete: () => {
        this.props.onComplete();
      }
    });
  }

  render() {
    return <div style={{ width: "75%" }} id="page" />;
  }
}

Page.propTypes = {
  strings: PropType.arrayOf(PropType.string).isRequired,
  onComplete: PropType.func.isRequired
};

export default Page;
