import Player from './player';
import Map from './map';

const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");
export const canvasWidth = 800;
export const canvasHeight = 600;


//  const tile = new Image();
//  tile.src = "../src/images/tile.png";
//  const tileWidth = 40;
//  const tileHeight = 15;
//  tile.onload = function() {
//    ctx.drawImage(tile, 0, 0);
//  };
const map = new Map(ctx);
map.drawFloor();
map.drawLadder();


// const player = new Player(ctx);

// ctx.beginPath();
// ctx.fillStyle = "black";
// ctx.rect(0, canvas.height / 5, 40, 15);
// ctx.rect(0, (canvas.height * 2) / 5, 40, 15);
// ctx.rect(0, (canvas.height * 3) / 5, 40, 15);
// ctx.rect(0, (canvas.height * 4) / 5, 40, 15);
// ctx.fill();
// ctx.closePath();

