import React, { Component } from "react";
import injectSheet from "react-jss";
import Dialog from "@material-ui/core/Dialog";
import Close from "@material-ui/icons/Close";

import Page from "./Page";
import Oak from "../../assets/chars/oak.png";
import { styles } from "./styles";
import "../../assets/misc/arrow.png";

const DISMISS_TUTORIAL_KEY = "dismiss_tutorial";

class Tutorial extends Component {
  state = {
    dialogue: 0,
    complete: false,
    dismiss: localStorage.getItem(DISMISS_TUTORIAL_KEY)
  };

  componentDidMount = () => {
    const { dismiss } = this.state;
    !dismiss && document.addEventListener("keyup", this.handleKeyUp);
  };

  close = () => {
    this.setState({ dismiss: true });
  };

  handleKeyUp = e => {
    const { dialogue, complete } = this.state;
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

  handleDismiss = () => {
    localStorage.setItem(DISMISS_TUTORIAL_KEY, true);
    this.setState({ dismiss: true });
  };

  nextDialogue = () => {
    this.setState(prevState => ({
      dialogue: prevState.dialogue + 1,
      complete: false
    }));
  };

  removeEventListener = () => {
    document.removeEventListener("keyup", this.handleKeyUp);
  };

  render() {
    const { dismiss, complete, dialogue } = this.state;
    const { classes } = this.props;

    return (
      <Dialog
        open={!dismiss}
        onClose={this.close}
        disableBackdropClick
        onEscapeKeyDown={this.handleDismiss}
        onExit={this.removeEventListener}
      >
        <div className={classes.Content}>
          <div
            role="presentation"
            className={classes.Dialogue}
            onClick={this.handleClick}
            ref={dialogue => {
              this.dialogue = dialogue;
            }}
          >
            <div className={classes.Exit}>
              <Close onClick={this.handleDismiss} />
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
      </Dialog>
    );
  }
}

export default injectSheet(styles)(Tutorial);
