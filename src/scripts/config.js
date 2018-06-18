import Phaser from "phaser";
import preload from "./preload";
import create from "./create";
import update from "./update";

const config = {
  type: Phaser.AUTO,
  width: 512,
  height: 512,
  parent: "app",
  antialias: true,
  framerate: 10,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

export default config;
