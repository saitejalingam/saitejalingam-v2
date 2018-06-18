function preload() {
  this.load.spritesheet("red", "assets/chars/red.png", {
    frameWidth: 16,
    frameHeight: 21
  });

  this.load.tilemapTiledJSON("map", "assets/tilemaps/map.json", null);
  this.load.image("3862_1", "assets/tilemaps/3862_1.png");
  this.load.image("3863", "assets/tilemaps/3863.png");
}

export default preload;
