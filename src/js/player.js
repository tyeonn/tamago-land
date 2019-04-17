import sprite from "./sprite";

class Player {
  constructor(ctx, canvasWidth, canvasHeight, map) {
    this.map = map;
    this.ladders = [];
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
      frameIndex: 0
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

    this.jump = this.jump.bind(this);
    this.stand = this.stand.bind(this);
    this.checkLadder = this.checkLadder.bind(this);
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
      if(!this.isClimbing){
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
      this.nextFloorY = this.map.floorLevelX[this.floorLevel + 1];
      let playerLowerY = this.sprite.dy + 50;
      let playerUpperY = this.sprite.dy;
      debugger;
      if (currLadder && playerLowerY > this.nextFloorY) {
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
        this.sprite.dy = this.nextFloorY - 48;
        console.log(this.sprite.dy);
        console.log(this.nextFloorY);
        console.log(this.nextFloorY - 48);
        this.stand("left");
        this.floorLevel++;
      }
    }
    // DOWN
    if (this.downPress && !this.isJumping) {
      let currLadder = this.checkLadder("down");
      this.nextFloorY = this.floorLevel !== 0 ? 
        this.map.floorLevelX[this.floorLevel - 1] : 
        600;
      let playerLowerY = this.sprite.dy + 50;
      let playerUpperY = this.sprite.dy;
      debugger;
      if (currLadder && playerLowerY <= this.nextFloorY) {
        this.isClimbing = true;
        this.sprite.dy += 4;
        this.sprite.image = this.climbingImg;
        this.sprite.width = 300;
        this.sprite.numberOfFrames = 5;
        this.sprite.standing = false;
        console.log(playerLowerY + " " + this.nextFloorY);
      } else if (playerUpperY >= this.nextFloorY-51) {
        // this.sprite.dy = this.map.floorLevelX[this.floorLevel + 1] + 50;
        debugger;
        this.isClimbing = false;
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
      // console.log("playerCenter" +playerCenter);
      // console.log("lad.x" + lad.x);
      // console.log("lad.x+40" + lad.x+40);
      // console.log("playerUpperY" + playerUpperY);
      // console.log("playerlowery" + playerLowerY);
      // console.log("lad.y" + lad.y);
      // console.log("lad.y" + lad.y+150);
      // debugger;
      if (action == "up") {
        if (
          playerCenter >= lad.x &&
          playerCenter <= lad.x + 40 &&
          playerUpperY >= lad.y - 15 &&
          playerLowerY >= lad.y +10 &&
          playerLowerY <= lad.y + 160
        ) {
          // debugger;
          // this.isClimbing = true;
          return lad;
        }
      } 
      else if (action == "down") {
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
  stand(side) {
    this.sprite.image =
      side === "left" ? this.standingImg : this.standingImgRight;
    this.sprite.width = 240;
    this.sprite.standing = true;
    this.sprite.frameIndex = 0;
    this.sprite.numberOfFrames = 4;
  }


  jump(e) {
    if (this.jumpPress && !this.isJumping) {
      this.isJumping = true;

      let initialY = this.sprite.dy;
      let velX;
      console.log(this.rightPress);
      if (this.rightPress) {
        velX = 1;
      } else if (this.leftPress) {
        velX = -1;
      } else {
        velX = 0;
      }
      let velY = -12;
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
  // let jumping = setInterval(() => {
  //   if (!this.goDown && this.sprite.dy > initialY - this.jumpLimit) {
  //     if (this.sprite.dx < 0 || this.sprite.dx > this.canvasWidth - 60) {
  //       this.sprite.dx += -velX;
  //     } else {
  //       this.sprite.dx += velX;
  //     }
  //     this.sprite.dy -= 4;
  //   } else if (this.sprite.dy < initialY) {
  //     this.goDown = true;
  //     if (this.sprite.dx < 0 || this.sprite.dx > this.canvasWidth - 60) {
  //       this.sprite.dx += -velX;
  //     } else {
  //       this.sprite.dx += velX;
  //     }
  //     this.sprite.dy += 4;
  //   } else {
  //     this.isJumping = false;
  //     clearInterval(jumping);
  //     this.goDown = false;
  //   }
  // }, 33);
  // moveLeft() {
  //   if (!this.leftPress) {
  //     this.stand("left");
  //   } else if (this.leftPress && this.sprite.dx > 0) {
  //     this.sprite.dx -= 7;
  //     this.sprite.image = this.walkingLeftImg;
  //     this.sprite.width = 600;
  //     this.sprite.numberOfFrames = 10;
  //     this.sprite.standing = false;
  //   }
  // }
  // moveRight() {
  //   // let right;
  //   // right = setInterval(() => {
  //   //   if(this.keys.ArrowRight && !this.rightPress){
  //   //     this.rightPress = true;
  //   //     if (this.sprite.dx < this.canvasWidth - 60) {
  //   //       this.sprite.dx += 7;
  //   //       this.sprite.image = this.walkingRightImg;
  //   //       this.sprite.width = 600;
  //   //       this.sprite.numberOfFrames = 10;
  //   //       this.sprite.standing = false;
  //   //     }
  //   //   }else{
  //   //     this.rightPress = false;
  //   //     clearInterval(right);
  //   //   }
  //   //   },10);
  //   if (!this.rightPress) {
  //     this.stand("right");
  //   } else if (this.rightPress && this.sprite.dx < this.canvasWidth - 60) {
  //     this.sprite.dx += 7;
  //     this.sprite.image = this.walkingRightImg;
  //     this.sprite.width = 600;
  //     this.sprite.numberOfFrames = 10;
  //     this.sprite.standing = false;
  //   }
  // }
}

export default Player;
