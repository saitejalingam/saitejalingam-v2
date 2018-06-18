function create() {
  this.cursors = this.input.keyboard.createCursorKeys();

  console.log(this);
  const map = this.make.tilemap({ key: "map" });
  const buildings = map.addTilesetImage("Builldings", "3862_1");
  const layout = map.addTilesetImage("Map1", "3863");

  map.createStaticLayer("Backdrop", layout, 0, 0);
  map.createStaticLayer("Ocean", layout, 0, 0);
  map.createStaticLayer("Roads", layout, 0, 0);
  map.createStaticLayer("Decorations", layout, 0, 0);
  map.createStaticLayer("Blockades", layout, 0, 0);
  map.createStaticLayer("Buildings", buildings, 0, 0);

  this.player = this.physics.add.sprite(50, 50, "red");
  this.player.setCollideWorldBounds(true);
  this.cameras.main.startFollow(this.player, true);
  //   this.cameras.main.setFollowOffset(100, 100);

  this.anims.create({
    key: "down",
    frames: this.anims.generateFrameNumbers("red", { start: 0, end: 3 }),
    frameRate: 8,
    delay: 0
  });

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("red", { start: 4, end: 7 }),
    frameRate: 8,
    delay: 0
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("red", { start: 8, end: 11 }),
    frameRate: 8,
    delay: 0
  });

  this.anims.create({
    key: "up",
    frames: this.anims.generateFrameNumbers("red", { start: 12, end: 15 }),
    frameRate: 8,
    delay: 0
  });
}

export default create;
