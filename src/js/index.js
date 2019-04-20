import Map from "./map";
import Player from "./player";
import { Howl, Howler } from "howler";

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

Howler.volume(0.3);
let toggleSound = true;
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
  autoUnlock: true
  // volume: 0.6,
});
const feintSong = new Howl({
  src: ["./src/songs/feint.mp3"],
  loop: false,
  autoUnlock: true,
  volume: 0.6
});
let fishSound = new Howl({
  src: ["./src/songs/fish.mp3"],
  loop: false,
  autoUnlock: true,
  volume: 0.6
});
startSong.play();

let map = new Map(ctx, canvasWidth, canvasHeight);
map.drawFish();
let player = new Player(
  ctx,
  canvasWidth,
  canvasHeight,
  map,
  changeState,
  fishSound,
  toggleSound
);

const unmute = document.getElementById("vol-on");
const mute = document.getElementById("vol-off");
const volume = document.querySelector("#volume");
let songPlaying = false;
volume.addEventListener("click", () => {
  toggleSound = !toggleSound;
  if (state == 0 && toggleSound) {
    player.toggleSounds();

    startSong.mute(false);
    startSong.play();
  } else if (state == 0 && !toggleSound) {
    player.toggleSounds();

    startSong.mute(true);
    startSong.pause();
  }
  if (toggleSound && state != 0) {
    player.toggleSounds();
    // fishSound.mute(false);
    mainSong.mute(false);
    mainSong.play();
  } else if (!toggleSound && state != 0) {
    player.toggleSounds();
    // fishSound.mute(true);
    mainSong.mute(true);
    mainSong.pause();
  }
  unmute.classList.toggle("hidden");
  mute.classList.toggle("hidden");
});

document.addEventListener("keydown", player.keyDownHandler);
document.addEventListener("keyup", player.keyUpHandler);
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("new-game-btn");
startBtn.addEventListener("click", () => {
  songPlaying = true;
  changeState(1);
  startScreen.classList.add("hidden");
  startSong.stop();
});
const endScreen = document.getElementById("end-screen");
const restartBtn = document.getElementById("restart-game-btn");
restartBtn.addEventListener("click", () => {
  let fishSound = new Howl({
    src: ["./src/songs/fish.mp3"],
    loop: false,
    autoUnlock: true,
    volume: 0.6
  });
  map = new Map(ctx, canvasWidth, canvasHeight);
  player = new Player(
    ctx,
    canvasWidth,
    canvasHeight,
    map,
    changeState,
    fishSound,
    toggleSound
  );
  map.drawFish();
  document.getElementById("score-num").innerHTML = `Fish: 0`;
  document.getElementById("level-num").innerHTML = "Level 1";
  document.addEventListener("keydown", player.keyDownHandler);
  document.addEventListener("keyup", player.keyUpHandler);
  endScreen.classList.add("hidden");
  changeState(1);
});
const winScreen = document.getElementById("win-screen");
const playAgainBtn = document.getElementById("play-again-btn");
playAgainBtn.addEventListener("click", () => {
  let fishSound = new Howl({
    src: ["./src/songs/fish.mp3"],
    loop: false,
    autoUnlock: true,
    volume: 0.6
  });
  map = new Map(ctx, canvasWidth, canvasHeight);
  player = new Player(
    ctx,
    canvasWidth,
    canvasHeight,
    map,
    changeState,
    fishSound,
    toggleSound
  );
  map.drawFish();
  document.getElementById("score-num").innerHTML = `Fish: 0`;
  document.getElementById("level-num").innerHTML = "Level 1";
  document.addEventListener("keydown", player.keyDownHandler);
  document.addEventListener("keyup", player.keyUpHandler);
  winScreen.classList.add("hidden");
  changeState(1);
});

const animate = () => {
  switch (state) {
    case 1:
      if (songPlaying && toggleSound) {
        mainSong.play();
        songPlaying = false;
      }
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      map.render();
      for (let fishObj of map.displayedFish()) {
        if (!fishObj.fish.hidden) {
          fishObj.fish.sprite.loop();
        }
      }
      player.sprite.loop();
      player.updatePos();
      player.checkTiles();
      player.checkObs();
      player.checkFish();
      break;
    case 2:
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      player.sprite.loop();
      endScreen.classList.remove("hidden");
      document.removeEventListener("keydown", player.keyDownHandler);
      document.removeEventListener("keyup", player.keyUpHandler);
      break;
    case 3:
      if (toggleSound) {
        feintSong.play();
      }
      state = 2;
      break;
    case 4:
      document.getElementById("level-num").innerHTML = "Level 2";
      player.resetSprite();
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
  requestAnimationFrame(animate);
};
animate();
