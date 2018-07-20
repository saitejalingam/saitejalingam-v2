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

const followCharacter = self => {
  const canvas_width = window.innerWidth;
  const canvas_height = window.innerHeight;

  const landscape = canvas_width > canvas_height;

  const scaled_dimension = landscape ? canvas_width : canvas_height;
  const scroll_dimension = landscape ? canvas_height : canvas_width;
  const scale = scaled_dimension / 512;

  const canvas_midpoint = scroll_dimension / (2 * scale);

  if (landscape && self.player.y > canvas_midpoint)
    window.scrollTo({
      top: (self.player.y - canvas_midpoint) * scale,
      behavior: "instant"
    });

  if (!landscape && self.player.x > canvas_midpoint)
    window.scrollTo({
      left: (self.player.x - canvas_midpoint) * scale,
      behavior: "instant"
    });
};

export { ifStationaryStopAnimation, moveCharacter, followCharacter };
