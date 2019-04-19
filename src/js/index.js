import Map from "./map";
import Player from "./player";
import Fish from "./fish";
import { Howl, Howler } from "howler";

Howler.volume(0.6);
const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = 800;
const canvasHeight = 600;
let state = 0;

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(f) {
    return setTimeout(f, 1000 / 60);
  };

const changeState = num => {
  state = num;
};
const startSong = new Howl({
  src: ["./src/songs/start_song.mp3"],
  // autoplay: true,
  loop: false,
  autoUnlock: true,
  volume: 0.6
});
const mainSong = new Howl({
  src: ["./src/songs/main_song.mp3"],
  // autoplay: true,
  loop: true,
  autoUnlock: true,
  volume: 0.6
});
const feintSong = new Howl({
  src: ["./src/songs/feint.mp3"],
  loop: false,
  autoUnlock: true,
  volume: 0.6
});

const fishSound = new Howl({
  src: ["./src/songs/fish.mp3"],
  loop: false,
  autoUnlock: true,
  volume: 0.6
});
startSong.play();

let map = new Map(ctx, canvasWidth, canvasHeight);
map.drawFish();
// let fishes = map.displayedFish();
let player = new Player(
  ctx,
  canvasWidth,
  canvasHeight,
  map,
  changeState,
  feintSong,
  // fishes,
  fishSound
);
// let fish = new Fish(ctx, canvasWidth, canvasHeight, map);

const unmute = document.getElementById("vol-on");
const mute = document.getElementById("vol-off");
const volume = document.querySelector("#volume");
volume.addEventListener("click", () => {
  // if(mainSong.playing()){
  //   mainSong.pause();
  //   mainSong.mute(true);
  // }else if(!mainSong.playing()){
  //   mainSong.mute(false);
  //   mainSong.play();
  // }
  // if (startSong.playing()) {
  //   startSong.pause();
  //   startSong.mute(true);
  // } else if (!startSong.playing()) {
  //   startSong.play();
  //   startSong.mute(false);
  // }
  mainSong.mute() ? mainSong.mute(false) : mainSong.mute(true);
  mainSong.playing() ? mainSong.pause() : mainSong.play();
  startSong.mute() ? startSong.mute(false) : startSong.mute(true);
  startSong.playing() ? startSong.pause() : startSong.play();
  unmute.classList.toggle("hidden");
  mute.classList.toggle("hidden");
});
document.addEventListener("keydown", player.keyDownHandler);
document.addEventListener("keyup", player.keyUpHandler);
const startBtn = document.getElementById("new-game-btn");
const startScreen = document.getElementById("start-screen");
startBtn.addEventListener("click", () => {
  changeState(1);
  startScreen.classList.add("hidden");
  startSong.stop();
});
const endScreen = document.getElementById("end-screen");
const restartBtn = document.getElementById("restart-game-btn");
restartBtn.addEventListener("click", () => {
  map = new Map(ctx, canvasWidth, canvasHeight);
  player = new Player(ctx, canvasWidth, canvasHeight, map, changeState);
  map.drawFish();
  document.getElementById("score-num").innerHTML = `Fish: 0`;
  document.getElementById("level-num").innerHTML = "Level 1";
  // cancelAnimationFrame(animation);
  // requestAnimationFrame(animate);
  document.addEventListener("keydown", player.keyDownHandler);
  document.addEventListener("keyup", player.keyUpHandler);
  changeState(1);
  endScreen.classList.add("hidden");
});
const winScreen = document.getElementById("win-screen");
const playAgainBtn = document.getElementById("play-again-btn");
playAgainBtn.addEventListener('click', () => {
  map = new Map(ctx, canvasWidth, canvasHeight);
  player = new Player(ctx, canvasWidth, canvasHeight, map, changeState);
  map.drawFish();
  document.getElementById("score-num").innerHTML = `Fish: 0`;
  document.getElementById("level-num").innerHTML = "Level 1";

  // cancelAnimationFrame(animation);
  // requestAnimationFrame(animate);
  document.addEventListener("keydown", player.keyDownHandler);
  document.addEventListener("keyup", player.keyUpHandler);
  changeState(1);
  winScreen.classList.add("hidden");
});

let animation;
// console.log(fishes);
const animate = () => {
  switch (state) {
    case 1:
      if (!mainSong.playing()) {
        mainSong.play();
      }
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      map.render();
      for(let fishObj of map.displayedFish()){
        if(!fishObj.fish.hidden){
          fishObj.fish.sprite.loop();
        }
      }
      player.sprite.loop();
      player.updatePos();
      player.checkTiles();
      player.checkObs();
      player.checkFish();
      // player.trackScore();
      break;
    case 2:
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      player.sprite.loop();
      // player.checkObs();
      endScreen.classList.remove("hidden");
      document.removeEventListener("keydown", player.keyDownHandler);
      document.removeEventListener("keyup", player.keyUpHandler);
      break;
    case 3:
      feintSong.play();
      state = 2;
      break;
    case 4:
      document.getElementById("level-num").innerHTML = "Level 2";
      state = 1;
      break;
    case 5:
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      player.sprite.loop();
      // player.checkObs();
      winScreen.classList.remove("hidden");
      document.removeEventListener("keydown", player.keyDownHandler);
      document.removeEventListener("keyup", player.keyUpHandler);
      break;
  }
  animation = requestAnimationFrame(animate);
};
animate();


