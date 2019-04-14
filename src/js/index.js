import Map from "./map";
import Player from "./player";

const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = 800;
const canvasHeight = 600;

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(f) {
    return setTimeout(f, 1000 / 60);
  };

const map = new Map(ctx, canvasWidth, canvasHeight);
const player = new Player(ctx, canvasWidth, canvasHeight);

document.addEventListener("keydown", player.keyDownHandler);
document.addEventListener("keyup", player.keyUpHandler);

const animate = () => {
  ctx.clearRect(0,0,canvasWidth,canvasHeight);
  map.render();
  player.sprite.loop();
  // player.sprite.update();
  // player.sprite.render();
  requestAnimationFrame(animate);
};
animate();
// ctx.beginPath();
// ctx.fillStyle = "black";
// ctx.rect(0, canvas.height / 5, 40, 15);
// ctx.rect(0, (canvas.height * 2) / 5, 40, 15);
// ctx.rect(0, (canvas.height * 3) / 5, 40, 15);
// ctx.rect(0, (canvas.height * 4) / 5, 40, 15);
// ctx.fill();
// ctx.closePath();
