import { canvasWidth, canvasHeight } from "./index";
class Map {
  constructor(ctx) {
    this.ctx = ctx;
    this.tile = new Image();
    this.tile.src = "../src/images/tile.png";
    this.tileWidth = 40;
    this.tileHeight = 15;
    this.createFloor = this.createFloor.bind(this);
    this.ladder = new Image();
    this.ladder.src = "../src/images/ladder.png";
    this.ladderWidth = 40;
    this.ladderHeight = 150;
    this.ladders = [];
  }

  drawFloor() {
    this.tile.onload = () => this.createFloor();
  }
  createFloor() {
    const missingTile = [
      [5, 0],
      [12, 0],
      [10, 1],
      [4, 2],
      [5, 3],
      [6, 3],
      [7, 3]
    ];
    const floorRow = 4;
    const floorCol = 20;
    this.floor = [];
    for (let col = 0; col < floorCol; col++) {
      this.floor[col] = [];
      for (let row = 0; row < floorRow; row++) {
        this.floor[col][row] = { x: 0, y: 0, missing: false };
      }
    }
    missingTile.forEach(
      function(tile) {
        this.floor[tile[0]][tile[1]].missing = true;
      }.bind(this)
    );

    for (let col = 0; col < floorCol; col++) {
      for (let row = 0; row < floorRow; row++) {
        let tileX = col * this.tileWidth;
        let tileY = (row + 1) * (canvasHeight / 5) - this.tileHeight;
        this.floor[col][row].x = tileX;
        this.floor[col][row].y = tileY;
        if (!this.floor[col][row].missing) {
          this.ctx.drawImage(this.tile, tileX, tileY);
        }
      }
    }
  }
  drawLadder() {
    const ladderPos = [[2, 0], [8, 1], [14, 2], [2, 3], [11, 3]];
    this.ladder.onload = () => {
      const ladderRow = 4;
      const ladderCol = 20;
      // this.ladders = [];
      for (let col = 0; col < ladderCol; col++) {
        this.ladders[col] = [];
        for (let row = 0; row < ladderRow; row++) {
          this.ladders[col][row] = { x: 0, y: 0, missing: true };
        }
      }
      ladderPos.forEach(
        function(lad) {
          this.ladders[lad[0]][lad[1]].missing = false;
        }.bind(this)
      );
      for (let col = 0; col < ladderCol; col++) {
        for (let row = 0; row < ladderRow; row++) {
          let ladX = col * this.ladderWidth;
          let ladY;
          if(row != 3){
            ladY = (row + 1) * (canvasHeight / 5) - 45;
          } else {
            ladY = (row + 1) * (canvasHeight / 5) - 30;
          }
          this.ladders[col][row].x = ladX;
          this.ladders[col][row].y = ladY;
          if (!this.ladders[col][row].missing) {
            this.ctx.drawImage(this.ladder, ladX, ladY);
          }
        }
      }
    };
  }
}
export default Map;
