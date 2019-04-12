
class Player {
  constructor(ctx) { 
    this.ctx = ctx;
    // this.standing = new Sprite("../src/images/penguin_standing");
    this.standingImg = "../src/images/penguin_standing.png";
    this.climbingImg = "../src/images/penguin_climb.png";
    this.feintLeftImg = "../src/images/penguin_feint_left.png";
    this.feintRightImg = "../src/images/penguin_feint_right.png";
    this.walkingLeftImg = "../src/images/penguin_walk_left.png";
    this.walkingRightImg = "../src/images/penguin_walk_right.png";
  }

  createSprite(){

  }
}

export default Player;