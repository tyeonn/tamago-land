# Tamago Land

 [Live](https://tyeonn.github.io/tamago-land/)

 ![Screenshot](https://github.com/tyeonn/tamago-land/blob/master/Screen%20Shot%202019-04-20%20at%203.37.45%20PM.png)

### Background
http://www.donkey-kong.org/ 
Tamago Land is a variation of the classic game of Donkey Kong. The original Donkey Kong is a single player game where Mario has to climb ladders to reach the top to save Princess Peach. Donkey Kong is the antagonist that throws barrels down in order to thwart Mario from reaching the top. In Tamago Land, the player will play as a penguin that has to eat all the fish and climb ladders to navigate through the floors. 

### Functionality & MVP  

With Tamago Land, users will be able to use the arrow keys to navigate and to use the spacebar to jump to avoid obstacles.
In addition, users will be able to: 
- [ ] Start and reset the game
- [ ] Mute the music 
- [ ] See their scores and level

In addition, this project will include:
- [ ] Instructions for the game
- [ ] Github and LinkedIn urls on the page
- [ ] A production README

### Wireframes

This app will consist of a single, centered screen and information about the game on the side. Game controls will include the arrow keys and the spacebar as well as a button to start and reset the game. The mute button and game instructions will be next to the screen. The links for Github and LinkedIn will be placed on the side.


![wireframes](https://github.com/tyeonn/tamago-land/blob/master/src/images/wireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `Canvas` for game rendering,
- `Webpack` to bundle js files.

There will be six scripts involved in this project:

`index.js`: this script will handle the logic for creating and updating the necessary elements and rendering them to the DOM.  
`map.js`: this script will load all the elements for the map.  
`player.js`: this script will handle player movement and interaction with the map.  
`fish.js`: this script will handle the fish animation.  
`sprite.js`: this script will handle the animation of the sprite sheet.  
`enemy.js`: this script will handle enemy movement.  

Canvas allows for 2D animation by utilizing the `requestAnimationFrame` function, which smoothly redraws the canvas 60 times per second. With each redraw, objects will be moving a certain number of pixels to simulate movement.

#### Sprite Sheet
![SpriteSheet](https://github.com/tyeonn/tamago-land/blob/master/src/images/penguin_walk_left.png)

Sprite animation is drawn using the canvas `drawImage` function and the sprites `render` and `update` function. A sprite sheet image is used by `render` to extract one image while the `update` function iterates through the image to get the next bounds. By looping through the image, it will simulate a moving object.
```
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
  ```
To make the player jump, it requires a simulation of gravity to give it a smooth arc across the screen. This is acheived by incrementing the x and y position of the with a certain speed of dx and dy. Gravity is then applied to the speed to gradually it down until it reaches the peak and then give it a negative speed to start moving down towards the ground. 
```
let initialY = this.sprite.dy;
let gravity = 0.9;
let velY = -13;
let velX;
if (this.rightPress) {
  velX = 2;
} else if (this.leftPress) {
  velX = -2;
} else {
  velX = 0;
}
let jumping = setInterval(() => {
  velY += gravity;
  this.sprite.dy += velY;
  if (this.sprite.dx < 0 || this.sprite.dx > this.canvasWidth - 60) {
    this.sprite.dx += -velX;
  } else {
    this.sprite.dx += velX;
  }
  if (this.sprite.dy > initialY) {
    velY = 0;
    this.sprite.dy = initialY;
    this.isJumping = false;
    clearInterval(jumping);
  }
}, 10);
```
Player and map interaction is handled by checking the bounds of the player with the bounds of the map object. Certain objects such as the ladder, fish, and obstacle requires different bound handling. For example: 
```
playerCenter >= lad.x &&
playerCenter <= lad.x + 40 &&
playerLowerY >= lad.y &&
playerLowerY <= lad.y + 150
```
The center of the player's width has to be between the left and right bounds of the ladder and the bottom of hte player has to be within the top and bottom of the ladder in order for the player to start climbing. If only the `x` is checked, then a ladder that is a few floors above the player would still be considered a valid ladder, and will allow the player to start climbing even though there is no ladder.

### Bonus features

There are many directions this game could eventually go.  Some anticipated updates are:

- [ ] Add more levels and increasing difficulty
- [ ] Add high score tracker with firebase
