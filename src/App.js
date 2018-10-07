import React from "react";
import Phaser from "phaser";

import config from "./scripts/config";
import Tutorial from "./components/Tutorial";
import "./App.css";

class App extends React.Component {
  state = {
    enableTouch: false
  };

  componentDidMount() {
    this.game = new Phaser.Game(config);
  }

  enableTouch = () => {
    this.setState({ enableTouch: true });
  };

  render() {
    return (
      <div id="app">
        <Tutorial onTouch={this.enableTouch} />
      </div>
    );
  }
}

export default App;
