import sprite from "./sprite";

class Player {
  constructor(ctx, canvasWidth, canvasHeight, map, changeState) {
    this.changeState = changeState;
    this.map = map;
    this.obstacles = [];
    this.ladders = [];
    this.missingTiles = [];
    this.floorLevel = 0;
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.standingImg = new Image();
    this.standingImg.src = "./src/images/penguin_standing.png";
    this.standingImgRight = new Image();
    this.standingImgRight.src = "./src/images/penguin_standing_right.png";
    this.climbingImg = new Image();
    this.climbingImg.src = "./src/images/penguin_climb.png";
    this.feintLeftImg = new Image();
    this.feintLeftImg.src = "./src/images/penguin_feint_left.png";
    this.feintRightImg = new Image();
    this.feintRightImg.src = "./src/images/penguin_feint_right.png";
    this.walkingLeftImg = new Image();
    this.walkingLeftImg.src = "./src/images/penguin_walk_left.png";
    this.walkingRightImg = new Image();
    this.walkingRightImg.src = "./src/images/penguin_walk_right.png";
    this.sprite = sprite({
      context: this.ctx,
      canvasWidth: this.canvasWidth,
      canvasHeight: this.canvasHeight,
      height: 54,
      width: 240,
      image: this.standingImg,
      dx: this.canvasWidth - 80,
      dy: this.canvasHeight - 48,
      ticksPerFrame: 5,
      numberOfFrames: 4,
      standing: true,
      feint: false,
      frameIndex: 0,
      step: 1
    });

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);

    this.rightPress = false;
    this.leftPress = false;
    this.upPress = false;
    this.downPress = false;
    this.jumpPress = false;
    this.jumpLimit = 75;
    //Prevent jumping while jumping
    this.isJumping = false;
    //Prevent L, R while climbing
    this.isClimbing = false;
    this.goingDown = false;
    this.goingUp = false;

    this.jump = this.jump.bind(this);
    this.stand = this.stand.bind(this);
    this.checkLadder = this.checkLadder.bind(this);
    this.feint = this.feint.bind(this);
    this.feintNoFall = this.feintNoFall.bind(this);
    this.keys = [];
    this.nextFloorY = 0;

    // this.moveLeft = this.moveLeft.bind(this);
    // this.moveRight = this.moveRight.bind(this);
    // this.goDown = false;
    // this.velX = 0;
  }

  keyDownHandler(e) {
    // debugger
    if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPress = true;
    }
    if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPress = true;
    }
    if (e.key == "Down" || e.key == "ArrowDown") {
      this.downPress = true;
    }
    if (e.key == "Up" || e.key == "ArrowUp") {
      this.upPress = true;
    }
    if (e.keyCode == 32 && !this.isClimbing) {
      this.jumpPress = true;
      this.jump(e);
    }
  }

  keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPress = false;
      if (!this.isClimbing) {
        this.stand("right");
      }
    }
    if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPress = false;
      if (!this.isClimbing) {
        this.stand("left");
      }
    }
    if (e.key == "Down" || e.key == "ArrowDown") {
      this.downPress = false;
    }
    if (e.key == "Up" || e.key == "ArrowUp") {
      this.upPress = false;
    }
    if (e.keyCode == 32) {
      this.jumpPress = false;
    }
  }
  stand(side) {
    this.sprite.image =
      side === "left" ? this.standingImg : this.standingImgRight;
    this.sprite.width = 240;
    this.sprite.standing = true;
    this.sprite.step = 1;
    this.sprite.frameIndex = 0;
    this.sprite.numberOfFrames = 4;
  }
  updatePos() {
    if (!this.isClimbing) {
      //RIGHT
      if (this.rightPress && this.sprite.dx < this.canvasWidth - 60) {
        this.sprite.dx += 4;
        this.sprite.image = this.walkingRightImg;
        this.sprite.width = 600;
        this.sprite.numberOfFrames = 10;
        this.sprite.standing = false;
      }
      // else if(!this.rightPress){
      //   this.stand("right");
      // }

      //LEFT
      if (this.leftPress && this.sprite.dx > 0) {
        this.sprite.dx -= 4;
        this.sprite.image = this.walkingLeftImg;
        this.sprite.width = 600;
        this.sprite.numberOfFrames = 10;
        this.sprite.standing = false;
      }
    }
    //UP
    if (this.upPress && !this.isJumping) {
      console.log(this.isClimbing);
      let currLadder = this.checkLadder("up");
      let playerUpperY = this.sprite.dy;
      this.goingDown
        ? (this.nextFloorY = this.map.floorLevelX[this.floorLevel])
        : (this.nextFloorY = this.map.floorLevelX[this.floorLevel + 1]);
      let playerLowerY = this.sprite.dy + 50;
      debugger;
      if (currLadder && playerLowerY > this.nextFloorY) {
        // this.goingUp = true;
        this.isClimbing = true;
        this.sprite.dy -= 4;
        this.sprite.image = this.climbingImg;
        this.sprite.width = 300;
        this.sprite.numberOfFrames = 5;
        this.sprite.standing = false;
        console.log(playerLowerY + " " + this.nextFloorY);
      } else if (playerUpperY <= this.nextFloorY) {
        // this.sprite.dy = this.map.floorLevelX[this.floorLevel + 1] + 50;
        this.isClimbing = false;
        // this.goingUp = false;
        this.sprite.dy = this.nextFloorY - 48;
        console.log(this.sprite.dy);
        console.log(this.nextFloorY);
        console.log(this.nextFloorY - 48);
        this.stand("left");
        // if(playerUpperY> this.floorLevel -45){
        this.floorLevel++;
        // }
      }
    }

    // DOWN
    if (this.downPress && !this.isJumping) {
      let currLadder = this.checkLadder("down");
      // this.nextFloorY = this.goingUp ?
      //   this.map.floorLevelX[this.floorLevel] :
      this.nextFloorY =
        this.floorLevel != 0 ? this.map.floorLevelX[this.floorLevel - 1] : 600;
      console.log(this.floorLevel);
      console.log("going up " + this.goingUp);
      console.log("going down " + this.goingDown);
      // this.goingUp
      //   ? (this.nextFloorY = this.map.floorLevelX[this.floorLevel])
      //   : (this.nextFloorY =
      //       this.floorLevel != 0
      //         ? this.map.floorLevelX[this.floorLevel - 1]
      //         : 600);
      let playerLowerY = this.sprite.dy + 50;
      let playerUpperY = this.sprite.dy;
      debugger;
      if (currLadder && playerLowerY <= this.nextFloorY) {
        this.goingDown = true;
        this.isClimbing = true;
        this.sprite.dy += 4;
        this.sprite.image = this.climbingImg;
        this.sprite.width = 300;
        this.sprite.numberOfFrames = 5;
        this.sprite.standing = false;
        console.log(playerLowerY + " " + this.nextFloorY);
      } else if (playerUpperY >= this.nextFloorY - 51) {
        // this.sprite.dy = this.map.floorLevelX[this.floorLevel + 1] + 50;
        debugger;
        this.isClimbing = false;
        this.goingDown = false;
        this.sprite.dy = this.nextFloorY - 48;
        console.log(this.sprite.dy);
        console.log(this.nextFloorY);
        console.log(this.nextFloorY - 48);
        this.stand("left");
        this.floorLevel--;
      }
    }
  }

  checkLadder(action) {
    this.ladders = this.map.displayedLadders();
    let playerCenter = this.sprite.dx + 30;
    this.nextFloorY = this.map.floorLevelX[this.floorLevel + 1];

    let playerUpperY = this.sprite.dy;
    let playerLowerY = this.sprite.dy + 50;
    for (let lad of this.ladders) {
      if (action == "up") {
        if (
          playerCenter >= lad.x &&
          playerCenter <= lad.x + 40 &&
          playerUpperY >= lad.y - 15 &&
          playerLowerY >= lad.y + 10 &&
          playerLowerY <= lad.y + 160
        ) {
          // debugger;
          // this.isClimbing = true;
          return lad;
        }
      } else if (action == "down") {
        if (
          playerCenter >= lad.x &&
          playerCenter <= lad.x + 40 &&
          // playerUpperY <= lad.y - 10 &&
          playerLowerY >= lad.y &&
          playerLowerY <= lad.y + 150
        ) {
          // debugger;
          // this.isClimbing = true;
          return lad;
        }
      }
    }
    return null;
    // return this.isClimbing ? true : false;
  }

  jump(e) {
    if (this.jumpPress && !this.isJumping) {
      this.isJumping = true;

      let initialY = this.sprite.dy;
      let velX;
      console.log(this.rightPress);
      if (this.rightPress) {
        velX = 2;
      } else if (this.leftPress) {
        velX = -2;
      } else {
        velX = 0;
      }
      let velY = -13;
      let gravity = 0.9;
      let jumping = setInterval(() => {
        velY += gravity;
        this.sprite.dy += velY;
        if (this.sprite.dx < 0 || this.sprite.dx > this.canvasWidth - 60) {
          this.sprite.dx += -velX;
        } else {
          this.sprite.dx += velX;
        }
        // this.sprite.dx += velX;
        if (this.sprite.dy > initialY) {
          velY = 0;
          this.sprite.dy = initialY;
          this.isJumping = false;
          clearInterval(jumping);
        }
      }, 10);
    }
  }
  checkObs() {
    this.obstacles = this.map.displayedObs();
    let playerCenter = this.sprite.dx + 30;
    let playerLowerY = this.sprite.dy + 50;
    for (let obs of this.obstacles) {
      if (
        playerLowerY <= obs.y + 50 &&
        playerLowerY >= obs.y + 10 &&
        this.sprite.dx + 10 <= obs.x + 30 &&
        this.sprite.dx + 45 >= obs.x
      ) {
        this.feintNoFall();
      }
    }
  }
  feintNoFall() {
    this.sprite.image =
      this.sprite.image === this.walkingLeftImg ?
      this.feintLeftImg :
      this.feintRightImg;
    this.sprite.width = 360;
    this.sprite.frameIndex = 0;
    this.sprite.numberOfFrames = 6;
    this.standing = false;
    setTimeout(this.changeState(3), 30);
  }
  checkTiles() {
    this.missingTiles = this.map.missingTiles();
    let playerCenter = this.sprite.dx + 30;
    let playerLowerY = this.sprite.dy + 50;
    for (let tile of this.missingTiles) {
      if (
        playerCenter >= tile.x &&
        playerCenter <= tile.x + 40 &&
        playerLowerY >= tile.y - 15 &&
        playerLowerY <= tile.y + 10
      ) {
        // while (this.sprite.dy < this.canvasWidth - 60) {
        //   velY += gravity;
        //   this.sprite.dy += velY;
        // }

        // velY = 0;

        // document.removeEventListener("keydown", this.keyDownHandler);
        // document.removeEventListener("keyup", this.keyUpHandler);
        this.feint();
      }
    }
  }
  feint() {
    let velY = 6;
    let gravity = 0.9;
    
    let feinting = setInterval(() => {
      velY += gravity;
      this.sprite.dy += velY;
      // if (this.sprite.dx < 0 || this.sprite.dx > this.canvasWidth - 60) {
      //   this.sprite.dx += -velX;
      // } else {
      //   this.sprite.dx += velX;
      // }
      // this.sprite.dx += velX;
      if (this.sprite.dy > this.canvasHeight - 60) {
        velY = 0;
        this.sprite.dy = this.canvasHeight - 50;
        this.sprite.image =
          this.sprite.image === this.walkingLeftImg
            ? this.feintLeftImg
            : this.feintRightImg;
        this.sprite.width = 360;
        // this.sprite.feint = true;
        this.sprite.frameIndex = 0;
        this.sprite.numberOfFrames = 6;
        clearInterval(feinting);
      }
    }, 20);
    setTimeout(
      this.changeState(3), 30
    );
  }
}

export default Player;
