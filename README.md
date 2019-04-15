# tamago-land
## Javascript Project Proposal: Tamago Land
### Background
http://www.donkey-kong.org/ 
Tamago Land is a variation of the classic game of Donkey Kong. The original Donkey Kong is a single player game where Mario has to climb ladders to reach the top to save Princess Peach. Donkey Kong is the antagonist that throws barrels down in order to thwart Mario from reaching the top. In Tamago Land, the player will play as a penguin that has to eat all the fish and climb ladders to navigate through the floors. 

### Functionality & MVP  

With Tamago Land, users will be able to use the arrow keys to navigate and to use the spacebar to jump to avoid obstacles.
In addition, users will be able to: 
- [ ] Start and reset the game
- [ ] Mute the music 
- [ ] See the highscores which is stored in a database

In addition, this project will include:
- [ ] An About modal describing the background and rules of the game
- [ ] Github and LinkedIn urls on the page
- [ ] A production README

### Wireframes

This app will consist of a single, centered screen and information about the game on the side. Game controls will include the arrow keys and the spacebar as well as a button to start and reset the game. The mute button and game instructions will be next to the screen. All the buttons except the mute button will fade away once the game starts. The links for Github and LinkedIn will be placed on the bottom.


![wireframes](https://github.com/tyeonn/tamago-land/blob/master/src/images/wireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `Canvas` for game rendering,
- `Webpack` to bundle js files.

In addition to the entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary `Foo.js` elements and rendering them to the DOM.



### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and create the entry file. Learn how to use canvas.

**Day 2**: Create the background image and basic structure of the first level in the game. 
- Create the floors, ladders, fish, and obstacles

**Day 3**: Create the sprite and the animations to move around.

**Day 4**: Style the outer background and implement instructions and buttons.


### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] Add more levels and increasing difficulty
- [ ] Add high score 
- [ ] Add music and mute button
