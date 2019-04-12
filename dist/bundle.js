/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: canvasWidth, canvasHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvasWidth\", function() { return canvasWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvasHeight\", function() { return canvasHeight; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./src/js/map.js\");\n\n\n\nconst canvas = document.getElementById(\"main-canvas\");\nconst ctx = canvas.getContext(\"2d\");\nconst canvasWidth = 800;\nconst canvasHeight = 600;\n\n\n//  const tile = new Image();\n//  tile.src = \"../src/images/tile.png\";\n//  const tileWidth = 40;\n//  const tileHeight = 15;\n//  tile.onload = function() {\n//    ctx.drawImage(tile, 0, 0);\n//  };\nconst map = new _map__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\nmap.drawFloor();\nmap.drawLadder();\n\n\n// const player = new Player(ctx);\n\n// ctx.beginPath();\n// ctx.fillStyle = \"black\";\n// ctx.rect(0, canvas.height / 5, 40, 15);\n// ctx.rect(0, (canvas.height * 2) / 5, 40, 15);\n// ctx.rect(0, (canvas.height * 3) / 5, 40, 15);\n// ctx.rect(0, (canvas.height * 4) / 5, 40, 15);\n// ctx.fill();\n// ctx.closePath();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ047O0FBRXhCO0FBQ0E7QUFDTztBQUNBOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBRztBQUNuQjtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgTWFwIGZyb20gJy4vbWFwJztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5leHBvcnQgY29uc3QgY2FudmFzV2lkdGggPSA4MDA7XG5leHBvcnQgY29uc3QgY2FudmFzSGVpZ2h0ID0gNjAwO1xuXG5cbi8vICBjb25zdCB0aWxlID0gbmV3IEltYWdlKCk7XG4vLyAgdGlsZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvdGlsZS5wbmdcIjtcbi8vICBjb25zdCB0aWxlV2lkdGggPSA0MDtcbi8vICBjb25zdCB0aWxlSGVpZ2h0ID0gMTU7XG4vLyAgdGlsZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbi8vICAgIGN0eC5kcmF3SW1hZ2UodGlsZSwgMCwgMCk7XG4vLyAgfTtcbmNvbnN0IG1hcCA9IG5ldyBNYXAoY3R4KTtcbm1hcC5kcmF3Rmxvb3IoKTtcbm1hcC5kcmF3TGFkZGVyKCk7XG5cblxuLy8gY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihjdHgpO1xuXG4vLyBjdHguYmVnaW5QYXRoKCk7XG4vLyBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuLy8gY3R4LnJlY3QoMCwgY2FudmFzLmhlaWdodCAvIDUsIDQwLCAxNSk7XG4vLyBjdHgucmVjdCgwLCAoY2FudmFzLmhlaWdodCAqIDIpIC8gNSwgNDAsIDE1KTtcbi8vIGN0eC5yZWN0KDAsIChjYW52YXMuaGVpZ2h0ICogMykgLyA1LCA0MCwgMTUpO1xuLy8gY3R4LnJlY3QoMCwgKGNhbnZhcy5oZWlnaHQgKiA0KSAvIDUsIDQwLCAxNSk7XG4vLyBjdHguZmlsbCgpO1xuLy8gY3R4LmNsb3NlUGF0aCgpO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n\nclass Map {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.tile = new Image();\n    this.tile.src = \"../src/images/tile.png\";\n    this.tileWidth = 40;\n    this.tileHeight = 15;\n    this.createFloor = this.createFloor.bind(this);\n    this.ladder = new Image();\n    this.ladder.src = \"../src/images/ladder.png\";\n    this.ladderWidth = 40;\n    this.ladderHeight = 150;\n    this.ladders = [];\n  }\n\n  drawFloor() {\n    this.tile.onload = () => this.createFloor();\n  }\n  createFloor() {\n    const missingTile = [\n      [5, 0],\n      [12, 0],\n      [10, 1],\n      [4, 2],\n      [5, 3],\n      [6, 3],\n      [7, 3]\n    ];\n    const floorRow = 4;\n    const floorCol = 20;\n    this.floor = [];\n    for (let col = 0; col < floorCol; col++) {\n      this.floor[col] = [];\n      for (let row = 0; row < floorRow; row++) {\n        this.floor[col][row] = { x: 0, y: 0, missing: false };\n      }\n    }\n    missingTile.forEach(\n      function(tile) {\n        this.floor[tile[0]][tile[1]].missing = true;\n      }.bind(this)\n    );\n\n    for (let col = 0; col < floorCol; col++) {\n      for (let row = 0; row < floorRow; row++) {\n        let tileX = col * this.tileWidth;\n        let tileY = (row + 1) * (_index__WEBPACK_IMPORTED_MODULE_0__[\"canvasHeight\"] / 5) - this.tileHeight;\n        this.floor[col][row].x = tileX;\n        this.floor[col][row].y = tileY;\n        if (!this.floor[col][row].missing) {\n          this.ctx.drawImage(this.tile, tileX, tileY);\n        }\n      }\n    }\n  }\n  drawLadder() {\n    const ladderPos = [[2, 0], [8, 1], [14, 2], [2, 3], [11, 3]];\n    this.ladder.onload = () => {\n      const ladderRow = 4;\n      const ladderCol = 20;\n      // this.ladders = [];\n      for (let col = 0; col < ladderCol; col++) {\n        this.ladders[col] = [];\n        for (let row = 0; row < ladderRow; row++) {\n          this.ladders[col][row] = { x: 0, y: 0, missing: true };\n        }\n      }\n      ladderPos.forEach(\n        function(lad) {\n          this.ladders[lad[0]][lad[1]].missing = false;\n        }.bind(this)\n      );\n      for (let col = 0; col < ladderCol; col++) {\n        for (let row = 0; row < ladderRow; row++) {\n          let ladX = col * this.ladderWidth;\n          let ladY;\n          if(row != 3){\n            ladY = (row + 1) * (_index__WEBPACK_IMPORTED_MODULE_0__[\"canvasHeight\"] / 5) - 45;\n          } else {\n            ladY = (row + 1) * (_index__WEBPACK_IMPORTED_MODULE_0__[\"canvasHeight\"] / 5) - 30;\n          }\n          this.ladders[col][row].x = ladX;\n          this.ladders[col][row].y = ladY;\n          if (!this.ladders[col][row].missing) {\n            this.ctx.drawImage(this.ladder, ladX, ladY);\n          }\n        }\n      }\n    };\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFwLmpzPzI2NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEscUJBQXFCLGdCQUFnQjtBQUNyQyx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0EsaUNBQWlDLG1EQUFZO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0EseUJBQXlCLGlCQUFpQjtBQUMxQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMseUJBQXlCLGlCQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbURBQVk7QUFDNUMsV0FBVztBQUNYLGdDQUFnQyxtREFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2Usa0VBQUcsRUFBQyIsImZpbGUiOiIuL3NyYy9qcy9tYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmNsYXNzIE1hcCB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMudGlsZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMudGlsZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvdGlsZS5wbmdcIjtcbiAgICB0aGlzLnRpbGVXaWR0aCA9IDQwO1xuICAgIHRoaXMudGlsZUhlaWdodCA9IDE1O1xuICAgIHRoaXMuY3JlYXRlRmxvb3IgPSB0aGlzLmNyZWF0ZUZsb29yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYWRkZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmxhZGRlci5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbGFkZGVyLnBuZ1wiO1xuICAgIHRoaXMubGFkZGVyV2lkdGggPSA0MDtcbiAgICB0aGlzLmxhZGRlckhlaWdodCA9IDE1MDtcbiAgICB0aGlzLmxhZGRlcnMgPSBbXTtcbiAgfVxuXG4gIGRyYXdGbG9vcigpIHtcbiAgICB0aGlzLnRpbGUub25sb2FkID0gKCkgPT4gdGhpcy5jcmVhdGVGbG9vcigpO1xuICB9XG4gIGNyZWF0ZUZsb29yKCkge1xuICAgIGNvbnN0IG1pc3NpbmdUaWxlID0gW1xuICAgICAgWzUsIDBdLFxuICAgICAgWzEyLCAwXSxcbiAgICAgIFsxMCwgMV0sXG4gICAgICBbNCwgMl0sXG4gICAgICBbNSwgM10sXG4gICAgICBbNiwgM10sXG4gICAgICBbNywgM11cbiAgICBdO1xuICAgIGNvbnN0IGZsb29yUm93ID0gNDtcbiAgICBjb25zdCBmbG9vckNvbCA9IDIwO1xuICAgIHRoaXMuZmxvb3IgPSBbXTtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBmbG9vckNvbDsgY29sKyspIHtcbiAgICAgIHRoaXMuZmxvb3JbY29sXSA9IFtdO1xuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgZmxvb3JSb3c7IHJvdysrKSB7XG4gICAgICAgIHRoaXMuZmxvb3JbY29sXVtyb3ddID0geyB4OiAwLCB5OiAwLCBtaXNzaW5nOiBmYWxzZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICBtaXNzaW5nVGlsZS5mb3JFYWNoKFxuICAgICAgZnVuY3Rpb24odGlsZSkge1xuICAgICAgICB0aGlzLmZsb29yW3RpbGVbMF1dW3RpbGVbMV1dLm1pc3NpbmcgPSB0cnVlO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGZsb29yQ29sOyBjb2wrKykge1xuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgZmxvb3JSb3c7IHJvdysrKSB7XG4gICAgICAgIGxldCB0aWxlWCA9IGNvbCAqIHRoaXMudGlsZVdpZHRoO1xuICAgICAgICBsZXQgdGlsZVkgPSAocm93ICsgMSkgKiAoY2FudmFzSGVpZ2h0IC8gNSkgLSB0aGlzLnRpbGVIZWlnaHQ7XG4gICAgICAgIHRoaXMuZmxvb3JbY29sXVtyb3ddLnggPSB0aWxlWDtcbiAgICAgICAgdGhpcy5mbG9vcltjb2xdW3Jvd10ueSA9IHRpbGVZO1xuICAgICAgICBpZiAoIXRoaXMuZmxvb3JbY29sXVtyb3ddLm1pc3NpbmcpIHtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy50aWxlLCB0aWxlWCwgdGlsZVkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRyYXdMYWRkZXIoKSB7XG4gICAgY29uc3QgbGFkZGVyUG9zID0gW1syLCAwXSwgWzgsIDFdLCBbMTQsIDJdLCBbMiwgM10sIFsxMSwgM11dO1xuICAgIHRoaXMubGFkZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxhZGRlclJvdyA9IDQ7XG4gICAgICBjb25zdCBsYWRkZXJDb2wgPSAyMDtcbiAgICAgIC8vIHRoaXMubGFkZGVycyA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbGFkZGVyQ29sOyBjb2wrKykge1xuICAgICAgICB0aGlzLmxhZGRlcnNbY29sXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBsYWRkZXJSb3c7IHJvdysrKSB7XG4gICAgICAgICAgdGhpcy5sYWRkZXJzW2NvbF1bcm93XSA9IHsgeDogMCwgeTogMCwgbWlzc2luZzogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsYWRkZXJQb3MuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24obGFkKSB7XG4gICAgICAgICAgdGhpcy5sYWRkZXJzW2xhZFswXV1bbGFkWzFdXS5taXNzaW5nID0gZmFsc2U7XG4gICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGxhZGRlckNvbDsgY29sKyspIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbGFkZGVyUm93OyByb3crKykge1xuICAgICAgICAgIGxldCBsYWRYID0gY29sICogdGhpcy5sYWRkZXJXaWR0aDtcbiAgICAgICAgICBsZXQgbGFkWTtcbiAgICAgICAgICBpZihyb3cgIT0gMyl7XG4gICAgICAgICAgICBsYWRZID0gKHJvdyArIDEpICogKGNhbnZhc0hlaWdodCAvIDUpIC0gNDU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhZFkgPSAocm93ICsgMSkgKiAoY2FudmFzSGVpZ2h0IC8gNSkgLSAzMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sYWRkZXJzW2NvbF1bcm93XS54ID0gbGFkWDtcbiAgICAgICAgICB0aGlzLmxhZGRlcnNbY29sXVtyb3ddLnkgPSBsYWRZO1xuICAgICAgICAgIGlmICghdGhpcy5sYWRkZXJzW2NvbF1bcm93XS5taXNzaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sYWRkZXIsIGxhZFgsIGxhZFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/map.js\n");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Player {\n  constructor(ctx) { \n    this.ctx = ctx;\n    // this.standing = new Sprite(\"../src/images/penguin_standing\");\n    this.standingImg = \"../src/images/penguin_standing.png\";\n    this.climbingImg = \"../src/images/penguin_climb.png\";\n    this.feintLeftImg = \"../src/images/penguin_feint_left.png\";\n    this.feintRightImg = \"../src/images/penguin_feint_right.png\";\n    this.walkingLeftImg = \"../src/images/penguin_walk_left.png\";\n    this.walkingRightImg = \"../src/images/penguin_walk_right.png\";\n  }\n\n  createSprite(){\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcGxheWVyLmpzP2VlMjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBLG9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRWUscUVBQU0iLCJmaWxlIjoiLi9zcmMvanMvcGxheWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihjdHgpIHsgXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgLy8gdGhpcy5zdGFuZGluZyA9IG5ldyBTcHJpdGUoXCIuLi9zcmMvaW1hZ2VzL3Blbmd1aW5fc3RhbmRpbmdcIik7XG4gICAgdGhpcy5zdGFuZGluZ0ltZyA9IFwiLi4vc3JjL2ltYWdlcy9wZW5ndWluX3N0YW5kaW5nLnBuZ1wiO1xuICAgIHRoaXMuY2xpbWJpbmdJbWcgPSBcIi4uL3NyYy9pbWFnZXMvcGVuZ3Vpbl9jbGltYi5wbmdcIjtcbiAgICB0aGlzLmZlaW50TGVmdEltZyA9IFwiLi4vc3JjL2ltYWdlcy9wZW5ndWluX2ZlaW50X2xlZnQucG5nXCI7XG4gICAgdGhpcy5mZWludFJpZ2h0SW1nID0gXCIuLi9zcmMvaW1hZ2VzL3Blbmd1aW5fZmVpbnRfcmlnaHQucG5nXCI7XG4gICAgdGhpcy53YWxraW5nTGVmdEltZyA9IFwiLi4vc3JjL2ltYWdlcy9wZW5ndWluX3dhbGtfbGVmdC5wbmdcIjtcbiAgICB0aGlzLndhbGtpbmdSaWdodEltZyA9IFwiLi4vc3JjL2ltYWdlcy9wZW5ndWluX3dhbGtfcmlnaHQucG5nXCI7XG4gIH1cblxuICBjcmVhdGVTcHJpdGUoKXtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/player.js\n");

/***/ })

/******/ });