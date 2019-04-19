import sprite from "./sprite";

class Enemy {
  constructor(ctx, canvasWidth, canvasHeight, map, enemyX, enemyY) {
    this.dx = enemyX;
    this.dy = enemyY;
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.map = map;
    this.enemyImg = new Image();
    this.enemyImg.src = "./src/images/enemy_walk_right.png";
    this.sprite = sprite({
      context: this.ctx,
      canvasWidth: this.canvassWidth,
      canvasHeight: this.canvasHeight,
      height: 40,
      width: 300,
      image: this.enemyImg,
      dx: this.dx,
      dy: this.dy,
      ticksPerFrame: 6,
      numberOfFrames: 5,
      standing: false,
      frameIndex: 0
    });
    // this.hidden = false;
  }

}
export default Enemy;
