function create() {
  this.cursors = this.input.keyboard.createCursorKeys();
  this.cameras.main.setBounds(0, 0, 512, 512);
  this.physics.world.setBounds(0, 0, 512, 512);

  console.log(this);
  const map = this.make.tilemap({ key: "map" });

  const buildings = map.addTilesetImage("Builldings", "3862_1");
  const layout = map.addTilesetImage("Map1", "3863");

  map.createStaticLayer("Backdrop", layout, 0, 0);
  const ocean = map.createDynamicLayer("Ocean", layout, 0, 0);
  const roads = map.createDynamicLayer("Roads", layout, 0, 0);
  map.createStaticLayer("Decorations", layout, 0, 0);
  const blockades = map.createDynamicLayer("Blockades", layout, 0, 0);
  const structures = map.createDynamicLayer("Buildings", buildings, 0, 0);

  this.player = this.physics.add.sprite(16, 40, "red");
  this.player.setCollideWorldBounds(true);

  structures.setCollisionByExclusion([-1]);
  this.physics.add.collider(structures, this.player);

  ocean.setCollisionByExclusion([-1]);
  this.physics.add.collider(ocean, this.player);

  blockades.setCollisionByExclusion([-1]);
  this.physics.add.collider(blockades, this.player);

  console.log(roads);

  // backdrop.setCollisionByExclusion([-1]);
  // this.physics.add.collider(backdrop, this.player);

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
