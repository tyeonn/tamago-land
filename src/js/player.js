import sprite from "./sprite";

class Player {
  constructor(ctx, canvasWidth, canvasHeight){
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.standingImg = new Image();
    this.standingImg.src = "../src/images/penguin_standing.png";
    this.standingImgRight = new Image();
    this.standingImgRight.src = "../src/images/penguin_standing_right.png";
    this.climbingImg = new Image();
    this.climbingImg.src = "../src/images/penguin_climb.png";
    this.feintLeftImg = new Image();
    this.feintLeftImg.src = "../src/images/penguin_feint_left.png";
    this.feintRightImg = new Image();
    this.feintRightImg.src = "../src/images/penguin_feint_right.png";
    this.walkingLeftImg = new Image();
    this.walkingLeftImg.src = "../src/images/penguin_walk_left.png";
    this.walkingRightImg = new Image();
    this.walkingRightImg.src = "../src/images/penguin_walk_right.png";
    // this.ticksPerFrame = 4;
    // this.numberOfFrames = 4;
    this.jumpLimit = 50;
    this.goDown = false;
    this.sprite = sprite({
      context: this.ctx,
      canvasWidth: this.canvasWidth,
      canvasHeight: this.canvasHeight,
      height: 54,
      width: 240,
      image: this.standingImg,
      dx: this.canvasWidth - 80 ,
      dy: this.canvasHeight - 48,
      ticksPerFrame: 6,
      numberOfFrames: 4,
      standing: true,
      frameIndex: 0,
    });
    this.rightPress = false;
    this.leftPress = false;
    this.upPress = false;
    this.downPress = false;
    this.jumpPress = false;

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.stand = this.stand.bind(this);
  }
  keyDownHandler(e) {
    // debugger
    if(e.key == "Right" || e.key == "ArrowRight") {
      this.rightPress = true;
      this.moveRight();
    }else if(e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPress = true;
      this.moveLeft(e);
    }else if(e.key == "Down" || e.key == "ArrowDown") {
      this.downPress = true;
      this.moveDown(e);
    }else if(e.key == "Up" || e.key == "ArrowUp") {
      this.upPress = true;
      this.moveUp(e);
    }else if(e.keyCode == 32){
      this.jumpPress = true;
      this.jump(e);
    }
  }

  keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
      this.rightPress = false;
      this.moveRight();
    }else if(e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPress = false;
      this.moveLeft();
    }else if(e.key == "Down" || e.key == "ArrowDown") {
      this.downPress = false;
      // this.moveDown();
    }else if(e.key == "Up" || e.key == "ArrowUp") {
      this.upPress = false;
      // this.moveUp();
    }else if(e.keyCode == 32){
      this.jumpPress = false;
      // this.jump();
    }
  }
  stand(side){
    this.sprite.image = side === "left" ? this.standingImg : this.standingImgRight;
    this.sprite.width = 240;
    this.sprite.standing = true;
    this.sprite.frameIndex = 0;
    this.sprite.numberOfFrames = 4;
  }
  moveLeft() {
    if(!this.leftPress){
      this.stand("left");
    }else if (this.leftPress && this.sprite.dx > 0) {
      this.sprite.dx -= 7;
      this.sprite.image = this.walkingLeftImg;
      this.sprite.width = 600;
      this.sprite.numberOfFrames = 10;
      this.sprite.standing = false;

    }
  }
  moveRight() {
    if (!this.rightPress) {
      this.stand("right");
    }else if(this.rightPress && this.sprite.dx < this.canvasWidth - 60) {
      this.sprite.dx += 7;
      this.sprite.image = this.walkingRightImg;
      this.sprite.width = 600;
      this.sprite.numberOfFrames = 10;
      this.sprite.standing = false;
    }
    
  }
  moveUp(e) {

  }

  moveDown(e) {

  }

  jump(e) {
    if(this.jumpPress){
      let initialY = this.sprite.dy;
      // setInterval(() => {
        if(this.sprite.dy > (this.sprite.dy - this.jumpLimit) ){
          this.sprite.dy -=10;
        }else if(this.sprite.dy < initialY){
          // this.goDown = true;
          this.sprite.dy +=10;
        }
  
      // },20);
      
    }
  }

}


export default Player;
