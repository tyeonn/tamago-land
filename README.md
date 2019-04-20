# Tamago Land

 [Live](https://tyeonn.github.io/tamago-land/)

 [!Screenshot](https://github.com/tyeonn/tamago-land/blob/master/Screen%20Shot%202019-04-20%20at%203.37.45%20PM.png)

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



### Bonus features

There are many directions this game could eventually go.  Some anticipated updates are:

- [ ] Add more levels and increasing difficulty
- [ ] Add high score tracker with firebase
