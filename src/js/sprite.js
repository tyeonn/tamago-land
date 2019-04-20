function sprite(options) {
  let that = {};
  that.frameIndex = options.frameIndex || 0;
  let tickCount = 0;
  let ticksPerFrame = options.ticksPerFrame || 0;
  that.step = options.step;

  that.canvasWidth = options.canvasWidth;
  that.canvasHeight = options.canvasHeight;
  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;
  that.dx = options.dx || 0;
  that.dy = options.dy || 0;
  that.numberOfFrames = options.numberOfFrames || 1;
  that.standing = options.standing;

  that.render = () => {
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
  };

  that.update = () => {
    tickCount += 1;
    if (tickCount > ticksPerFrame) {
      tickCount = 0;
      // Iterate sprite sheet back and forth
      if (that.standing) {
        that.frameIndex += that.step;
        if (
          that.frameIndex === that.numberOfFrames - 1 ||
          that.frameIndex === 0
        ) {
          that.step = -that.step;
        }
      // Iterate sprite sheet from beginning
      } else if (!that.standing) {
        if (that.frameIndex < that.numberOfFrames - 1) {
          that.frameIndex += 1;
        } else {
          that.frameIndex = 0;
        }
      }
    }
  };

  that.loop = () => {
    that.render();
    that.update();
  };

  return that;
}
export default sprite;
