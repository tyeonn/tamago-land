function sprite(options) {
  let that = {};
  that.frameIndex = options.frameIndex || 0;
  let tickCount = 0;
  let ticksPerFrame = options.ticksPerFrame || 0;
  let step = 1;
 
  that.canvasWidth = options.canvasWidth;
  that.canvasHeight = options.canvasHeight;
  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;
  // that.sx = options.sx || 0;
  // that.sy = options.sy || 0;
  that.dx = options.dx || 0;
  that.dy = options.dy || 0;
  that.numberOfFrames = options.numberOfFrames || 1;
  that.standing = options.standing;

  that.render = () => {
    // that.image.onload = () => {
    that.context.drawImage(
      that.image,
      // Sprite sheet
      that.frameIndex * (that.width / that.numberOfFrames),
      0,
      //Single sprite
      that.width / that.numberOfFrames,
      that.height,
      //Canvas position
      that.dx,
      that.dy,
      //Sprite size on canvas
      that.width / that.numberOfFrames,
      that.height
    );
    // };
  };

  that.update = () => {
    // debugger
    tickCount += 1;

    if (tickCount > ticksPerFrame) {

      tickCount = 0;
      if(that.standing){
        that.frameIndex += step;
        if (that.frameIndex === that.numberOfFrames - 1 || that.frameIndex === 0) {
          step = -step;
        }
      }else{
        step = 1;
        if(that.frameIndex < that.numberOfFrames - 1){
          that.frameIndex += 1;
        }else{
          that.frameIndex = 0;
        }

      }
    }
  };

  that.loop = () => {
    that.render();
    that.update();
    // requestAnimationFrame(that.loop);
  };

  return that;
}
export default sprite;
