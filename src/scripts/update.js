import {
  moveCharacter,
  ifStationaryStopAnimation,
  followCharacter
} from "./character";

function update() {
  moveCharacter(this);
  ifStationaryStopAnimation(this);
  followCharacter(this);
}

export default update;
