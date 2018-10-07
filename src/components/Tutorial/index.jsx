import React, { Component } from "react";
import { Transition } from "react-transition-group";
import injectSheet from "react-jss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";

import Page from "./Page";
import Oak from "../../assets/chars/oak.png";
import { styles } from "./styles";
import "../../assets/misc/arrow.png";

const DISMISS_TUTORIAL_KEY = "dismiss_tutorial";

const defaultStyle = {
  transition: `all ${200}ms ease`,
  zIndex: 500
};

const transitionStyles = {
  exited: { display: "none" }
};

class Tutorial extends Component {
  state = {
    dialogue: 0,
    complete: false,
    dismiss: localStorage.getItem(DISMISS_TUTORIAL_KEY)
  };

  componentDidMount = () => {
    document.addEventListener("keyup", this.handleKeyUp);
    document.addEventListener("touchstart", this.handleTouchStart);
  };

  handleKeyUp = e => {
    const { dialogue, complete } = this.state;

    if (e.key === "Escape") this.close();
    if (e.key === "Enter" && complete) {
      if (dialogue > 3) this.close();
      else this.nextDialogue();
    }
  };

  handleClick = e => {
    const { dialogue, complete } = this.state;

    if (dialogue > 3 && complete) this.close();
    else if (complete) this.nextDialogue();
  };

  handleTouchStart = () => {
    this.props.onTouch();
    document.removeEventListener("touchstart", this.handleTouchStart);
  };

  nextDialogue = () => {
    this.setState(prevState => ({
      dialogue: prevState.dialogue + 1,
      complete: false
    }));
  };

  cleanUpListener = () => {
    document.removeEventListener("keyup", this.handleKeyUp);
  };

  close = () => {
    this.setState({ dismiss: true });
  };

  dismiss = () => {
    localStorage.setItem(DISMISS_TUTORIAL_KEY, true);
    this.setState({ dismiss: true });
  };

  render() {
    const { dismiss, complete, dialogue } = this.state;
    const { classes } = this.props;

    return (
      <div
        className={classes.Overlay}
        style={dismiss ? { background: "none" } : null}
      >
        <Transition in={!dismiss} timeout={100} onExited={this.cleanUpListener}>
          {state => (
            <div
              className={classes.Content}
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <div
                role="presentation"
                className={classes.Dialogue}
                onClick={this.handleClick}
                ref={dialogue => {
                  this.dialogue = dialogue;
                }}
              >
                <div className={classes.Exit}>
                  <span>esc</span>
                  {/* <FontAwesomeIcon
                  icon={faTimes}
                  size="lg"
                  onClick={() => {
                    localStorage.setItem("dismissTutorial", true);
                    this.props.done();
                    this.setState({ visible: false });
                  }}
                /> */}
                </div>

                <img className={classes.Oak} src={Oak} alt="professor oak" />

                {dialogue === 0 ? (
                  <Page
                    onComplete={() => this.setState({ complete: true })}
                    strings={[
                      "Greetings! ^500 `<br>Welcome` to my page! `<div id='red-caret'><p /></div>`"
                    ]}
                  />
                ) : null}

                {dialogue === 1 ? (
                  <Page
                    onComplete={() => this.setState({ complete: true })}
                    strings={[
                      "You can use the &larr;, &uarr;, &darr;, &rarr; keys or on screen controls to move around..." +
                        "`<div id='red-caret'><p /></div>`"
                    ]}
                  />
                ) : null}

                {dialogue === 2 ? (
                  <Page
                    onComplete={() => this.setState({ complete: true })}
                    strings={[
                      "Try talking to an NPC to learn more about me... `<div id='red-caret'><p /></div>`"
                    ]}
                  />
                ) : null}

                {dialogue === 3 ? (
                  <Page
                    onComplete={() => this.setState({ complete: true })}
                    strings={[
                      "Alternatively, you can use the tabs above to navigate the page..." +
                        "`<div id='red-caret'><p /></div>`"
                    ]}
                  />
                ) : null}

                {dialogue === 4 ? (
                  <Page
                    onComplete={() => this.setState({ complete: true })}
                    strings={["Enjoy! `<div id='red-caret'><p /></div>`"]}
                  />
                ) : null}

                {complete ? (
                  <div className={classes.Prompt}>Tap or Enter to Continue</div>
                ) : null}
              </div>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default injectSheet(styles)(Tutorial);
