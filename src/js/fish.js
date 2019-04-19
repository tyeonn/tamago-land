import sprite from './sprite';

class Fish {
  constructor(ctx, canvasWidth, canvasHeight, map, fishX, fishY) {
    this.dx = fishX;
    this.dy = fishY;
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.map = map;
    this.fishImg = new Image();
    this.fishImg.src = "./src/images/fish.png";
    this.sprite = sprite({
      context: this.ctx,
      canvasWidth: this.canvassWidth,
      canvasHeight: this.canvasHeight,
      height: 40,
      width: 360,
      image: this.fishImg,
      dx: this.dx,
      dy: this.dy,
      ticksPerFrame: 6,
      numberOfFrames: 6,
      standing: false,
      frameIndex: 0,
      
    });
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
    
  }
}
export default Fish;
