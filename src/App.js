import React from "react";
import Phaser from "phaser";

import config from "./scripts/config";
import Tutorial from "./components/Tutorial";
import "./App.css";

class App extends React.Component {
  state = {
    showTouchControls: false
  };

  componentDidMount() {
    this.game = new Phaser.Game(config);
    document.addEventListener("touchstart", this.handleTouchStart);
  }

  handleTouchStart = () => {
    this.setState({ showTouchControls: true });
    document.removeEventListener("touchstart", this.handleTouchStart);
  };

  render() {
    return (
      <div id="app">
        <Tutorial />
      </div>
    );
  }
}

export default App;
