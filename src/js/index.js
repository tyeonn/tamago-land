import Map from "./map";
import Player from "./player";
import {Howl, Howler} from 'howler';

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
  
const changeState = (num) => {
  state = num;
};
let map = new Map(ctx, canvasWidth, canvasHeight);
let player = new Player(ctx, canvasWidth, canvasHeight, map, changeState);
const mainSong = new Howl({
  src: ['./src/songs/main_song.mp3'],
  // autoplay: true,
  loop: true,
  autoUnlock: true,
  volume: 0.6
});

// mainSong.play();

const unmute = document.getElementById("vol-on");
const mute = document.getElementById("vol-off");
const volume = document.querySelector("#volume");
volume.addEventListener('click', () => {
  mainSong.mute() ? mainSong.mute(false) : mainSong.mute(true);
  mainSong.playing() ? mainSong.pause() : mainSong.play();
  unmute.classList.toggle("hidden");
  mute.classList.toggle("hidden");
});
document.addEventListener("keydown", player.keyDownHandler);
document.addEventListener("keyup", player.keyUpHandler);
const endScreen = document.getElementById("end-screen");

let animation;
const animate = () => {
  switch(state){
    case 0:
    const startBtn = document.getElementById("new-game-btn");
      const startScreen = document.getElementById("start-screen");
      startBtn.addEventListener('click', () => {
        changeState(1);
        startScreen.classList.add("hidden");
      });
      break;
      case 1:
      ctx.clearRect(0,0,canvasWidth,canvasHeight);
      map.render();
      player.sprite.loop();
      player.updatePos();
      player.checkTiles();
      break;
      case 2:
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    map.render();
    player.sprite.loop();
    player.updatePos();
    player.checkTiles();
      endScreen.classList.remove("hidden");
      document.removeEventListener("keydown", player.keyDownHandler);
      document.removeEventListener("keyup", player.keyUpHandler);
      break;
      
    }
    animation = requestAnimationFrame(animate);
  };
  animate();

  const restartBtn = document.getElementById("restart-game-btn");
  restartBtn.addEventListener("click", () => {
    // cancelAnimationFrame(animation);
    map = new Map(ctx, canvasWidth, canvasHeight);
    player = new Player(
      ctx,
      canvasWidth,
      canvasHeight,
      map,
      changeState
    );
    // requestAnimationFrame(animate);
    document.addEventListener("keydown", player.keyDownHandler);
    document.addEventListener("keyup", player.keyUpHandler);
    changeState(1);
    endScreen.classList.add("hidden");
  });
