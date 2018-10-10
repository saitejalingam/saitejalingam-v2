import React, { Component } from "react";
import injectSheet from "react-jss";
import Typed from "typed.js";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

import pixel_avatar from "../../assets/pixel_portrait__80x80.png";
import github from "../../assets/misc/github.png";
import linkedin from "../../assets/misc/linkedin.png";
import facebook from "../../assets/misc/facebook.png";

import { styles } from "./styles";

const description = {
  strings: [
    "Fullstack Web Developer ...",
    "Code lover ...",
    "Gaming enthusiast ..."
  ],
  loop: true,
  typeSpeed: 10,
  backDelay: 2000,
  showCursor: false
};

class Menu extends Component {
  state = {};

  componentDidMount() {
    /* eslint-disable no-new */
    new Typed("#description", description);
  }

  handleLink = link => () => {
    window.open(link, "_blank");
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Card}>
        <Avatar
          alt="Sai Teja Lingam"
          src={pixel_avatar}
          className={classes.Avatar}
        />

        <div className={classes.Content}>
          <div>
            <h4 className={classes.Title}>VEERA SAI TEJA LINGAM</h4>
            <p
              style={{
                margin: "5px 0",
                fontSize: 14,
                minHeight: 25,
                fontFamily: "Montserrat,sans-serif"
              }}
              id="description"
            />
          </div>

          <div style={{ marginLeft: "-5px" }}>
            <IconButton
              className={classes.IconButton}
              onClick={this.handleLink("https://github.com/saitejalingam")}
            >
              <img className={classes.Icon} src={github} alt="github" />
            </IconButton>

            <IconButton
              className={classes.IconButton}
              onClick={this.handleLink(
                "https://www.linkedin.com/in/saitejalingam"
              )}
            >
              <img className={classes.Icon} src={linkedin} alt="linkedin" />
            </IconButton>

            <IconButton
              className={classes.IconButton}
              onClick={this.handleLink(
                "https://www.facebook.com/saiteja.lingam"
              )}
            >
              <img className={classes.Icon} src={facebook} alt="facebook" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Menu);
