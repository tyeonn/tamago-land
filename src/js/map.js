class Map {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.tile = new Image();
    this.tile.src = "./src/images/tile.png";
    this.tileWidth = 40;
    this.tileHeight = 15;
    this.ladder = new Image();
    this.ladder.src = "./src/images/ladder.png";
    this.ladderWidth = 40;
    this.ladderHeight = 150;
    this.ladders = [];
    this.obstacle = new Image();
    this.obstacle.src = "./src/images/obstacle.png";
    this.obstacles = [];
    this.obstacleWidth = 35;
    this.obstacleHeight = 45;
    this.drawFloor = this.drawFloor.bind(this);
    this.createFloor = this.createFloor.bind(this);
    this.drawLadder = this.drawLadder.bind(this);
    this.drawObstacle = this.drawObstacle.bind(this);
    this.ladderRow = 4;
    this.ladderCol = 20;
    this.floorRow = 4;
    this.floorCol = 20;
    this.obsRow = 5;
    this.obsCol = 20;
    this.ladderPos = [[2, 0], [8, 1], [14, 2], [2, 3], [11, 3]];
    this.obstaclePos = [
      [8, 0],
      [15, 0],
      // [17, 0],
      [5, 1],
      [15, 1],
      [10, 2],
      [17, 2],
      [15, 3],
      [5, 4],
      [13, 4],
      [16, 4]
    ];
    this.floorLevelX = {
      0: 600,
      1: 465,
      2: 345,
      3: 225,
      4: 105
    };
  }

  render() {
    this.drawFloor();
    this.drawLadder();
    this.drawObstacle();
  }
  drawFloor() {
    // this.tile.onload = () =>
    this.createFloor();
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

    this.floor = [];
    for (let col = 0; col < this.floorCol; col++) {
      this.floor[col] = [];
      for (let row = 0; row < this.floorRow; row++) {
        this.floor[col][row] = { x: 0, y: 0, missing: false };
      }
    }
    missingTile.forEach(
      function(tile) {
        this.floor[tile[0]][tile[1]].missing = true;
      }.bind(this)
    );

    for (let col = 0; col < this.floorCol; col++) {
      for (let row = 0; row < this.floorRow; row++) {
        let tileX = col * this.tileWidth;
        let tileY = (row + 1) * (this.canvasHeight / 5) - this.tileHeight;
        this.floor[col][row].x = tileX;
        this.floor[col][row].y = tileY;
        if (!this.floor[col][row].missing) {
          this.ctx.drawImage(this.tile, tileX, tileY);
        }
      }
    }
  }
  drawLadder() {
    // this.ladderPos = [[2, 0], [8, 1], [14, 2], [2, 3], [11, 3]];
    // this.ladder.onload = () => {
    // this.ladderRow = 4;
    // this.ladderCol = 20;
    // this.ladders = [];
    for (let col = 0; col < this.ladderCol; col++) {
      this.ladders[col] = [];
      for (let row = 0; row < this.ladderRow; row++) {
        this.ladders[col][row] = { x: 0, y: 0, missing: true };
      }
    }
    this.ladderPos.forEach(
      function(lad) {
        this.ladders[lad[0]][lad[1]].missing = false;
      }.bind(this)
    );
    for (let col = 0; col < this.ladderCol; col++) {
      for (let row = 0; row < this.ladderRow; row++) {
        let ladX = col * this.ladderWidth;
        let ladY;
        if (row != 3) {
          ladY = (row + 1) * (this.canvasHeight / 5) - 45;
        } else {
          ladY = (row + 1) * (this.canvasHeight / 5) - 30;
        }
        this.ladders[col][row].x = ladX;
        this.ladders[col][row].y = ladY;
        if (!this.ladders[col][row].missing) {
          this.ctx.drawImage(this.ladder, ladX, ladY);
        }
      }
    }
    // };
  }

  //Filter ladders that are not missing
  displayedLadders() {
    let lads = [];
    for (let col = 0; col < this.ladderCol; col++) {
      for (let row = 0; row < this.ladderRow; row++) {
        if (!this.ladders[col][row].missing) {
          lads.push(this.ladders[col][row]);
        }
      }
    }
    return lads;
  }

  drawObstacle() {
    for (let col = 0; col < this.obsCol; col++) {
      this.obstacles[col] = [];
      for (let row = 0; row < this.obsRow; row++) {
        this.obstacles[col][row] = { x: 0, y: 0, missing: true };
      }
    }
    this.obstaclePos.forEach(pos => {
      this.obstacles[pos[0]][pos[1]].missing = false;
    });
    for (let col = 0; col < this.obsCol; col++) {
      for (let row = 0; row < this.obsRow; row++) {
        let obsX = col * (this.obstacleWidth+5);
        let obsY;
        if(row != 4){
          obsY = (row + 1) * (this.canvasHeight / 5) - (this.obstacleHeight + this.tileHeight);
        }else{
          obsY = (row + 1) * (this.canvasHeight / 5) - (this.obstacleHeight);
        }
        this.obstacles[col][row].x = obsX;
        this.obstacles[col][row].y = obsY;
        
        if(!this.obstacles[col][row].missing){
          this.ctx.drawImage(this.obstacle, obsX, obsY);
        }
      }
    }
  }
  displayedObs() {
    let obs = [];
    for (let col = 0; col < this.obsCol; col++) {
      for (let row = 0; row < this.obsRow; row++) {
        if (!this.obstacles[col][row].missing) {
          obs.push(this.obstacles[col][row]);
        }
      }
    }
    return obs;
  }
  missingTiles() {
    let tiles = [];
    for (let col = 0; col < this.floorCol; col++) {
      for (let row = 0; row < this.floorRow; row++) {
        if (this.floor[col][row].missing) {
          tiles.push(this.floor[col][row]);
        }
      }
    }

    return tiles;
  }
}
export default Map;
