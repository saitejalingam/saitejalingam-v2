import React from "react";
import Phaser from "phaser";

import config from "./scripts/config";
import "./App.css";

class App extends React.Component {
  state = {};

  componentDidMount() {
    this.game = new Phaser.Game(config);
    console.log(this.game);
  }

  render() {
    return <div id="app" />;
  }
}

export default App;
