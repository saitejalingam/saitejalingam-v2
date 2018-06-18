import { find } from "lodash-es";

const ifStationaryStopAnimation = self => {
  if (!find(self.cursors, { isDown: true }) && self.player.anims.currentAnim) {
    self.player.anims.pause(self.player.anims.currentAnim.frames[0]);
  }
};

const moveCharacter = self => {
  self.player.body.velocity.y = 0;
  self.player.body.velocity.x = 0;

  if (self.cursors.up.isDown) {
    self.player.setVelocityY(-100);
    self.player.anims.play("up", true);
  } else if (self.cursors.down.isDown) {
    self.player.setVelocityY(100);
    self.player.anims.play("down", true);
  } else if (self.cursors.left.isDown) {
    self.player.setVelocityX(-100);
    self.player.anims.play("left", true);
  } else if (self.cursors.right.isDown) {
    self.player.setVelocityX(100);
    self.player.anims.play("right", true);
  }
};

export { ifStationaryStopAnimation, moveCharacter };
