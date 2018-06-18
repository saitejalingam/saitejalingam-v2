import { moveCharacter, ifStationaryStopAnimation } from "./character";

function update() {
  moveCharacter(this);
  ifStationaryStopAnimation(this);
}

export default update;
