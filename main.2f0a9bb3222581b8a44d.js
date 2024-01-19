/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/icons/pause.svg":
/*!********************************!*\
  !*** ./assets/icons/pause.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1e5ea128500ff92cefd.svg";

/***/ }),

/***/ "./assets/rainy-bg.jpg":
/*!*****************************!*\
  !*** ./assets/rainy-bg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5df8a5c7dcda04cc3f1e.jpg";

/***/ }),

/***/ "./assets/sounds/rain.mp3":
/*!********************************!*\
  !*** ./assets/sounds/rain.mp3 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7ee8a84e7ecf1112c27.mp3";

/***/ }),

/***/ "./assets/sounds/summer.mp3":
/*!**********************************!*\
  !*** ./assets/sounds/summer.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba837e3ecc073286cbc4.mp3";

/***/ }),

/***/ "./assets/sounds/winter.mp3":
/*!**********************************!*\
  !*** ./assets/sounds/winter.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24f5c09b90641ef35477.mp3";

/***/ }),

/***/ "./assets/summer-bg.jpg":
/*!******************************!*\
  !*** ./assets/summer-bg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a318dfda9223c9b6bcc1.jpg";

/***/ }),

/***/ "./assets/winter-bg.jpg":
/*!******************************!*\
  !*** ./assets/winter-bg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "032cb68ed96890ac0c3b.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./index.scss");
/* harmony import */ var _assets_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/summer-bg.jpg */ "./assets/summer-bg.jpg");
/* harmony import */ var _assets_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/rainy-bg.jpg */ "./assets/rainy-bg.jpg");
/* harmony import */ var _assets_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/winter-bg.jpg */ "./assets/winter-bg.jpg");
/* harmony import */ var _assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/pause.svg */ "./assets/icons/pause.svg");
/* harmony import */ var _assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sounds/summer.mp3 */ "./assets/sounds/summer.mp3");
/* harmony import */ var _assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/sounds/rain.mp3 */ "./assets/sounds/rain.mp3");
/* harmony import */ var _assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sounds/winter.mp3 */ "./assets/sounds/winter.mp3");










const allBtns = document.querySelector(".btns");
const volumeInput = document.querySelector("#volumeControl");

document.body.style.backgroundImage = `url("${_assets_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_1__}")`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center center";

const blurLayer = document.createElement("div");
blurLayer.style.position = "fixed";
blurLayer.style.top = "0";
blurLayer.style.left = "0";
blurLayer.style.width = "100vw";
blurLayer.style.height = "100vh";
blurLayer.style.zIndex = "-1";
blurLayer.style.backgroundImage = "inherit";
blurLayer.style.filter = "blur(5px)";

document.body.appendChild(blurLayer);

const audios = {
  sunny: new Audio(_assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_5__),
  rainy: new Audio(_assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_6__),
  snow: new Audio(_assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_7__),
};
const icons = {
  sunny: document.querySelector(".sunnyIcon"),
  rainy: document.querySelector(".rainyIcon"),
  snow: document.querySelector(".snowIcon"),
};

const backgroundImages = {
  sunny: _assets_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_1__,
  rainy: _assets_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_2__,
  snow: _assets_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_3__,
};

Object.values(audios).forEach((audio) => {
  audio.loop = true;
});

const resetPauseIcon = () => {
  Object.values(icons).forEach((icon) => (icon.style.backgroundImage = ""));
};

const resetAllAudio = () => {
  Object.values(audios).forEach((mp3) => mp3.pause());
};

let isPlaying = false;
let lastPlayed = null;

const updateUI = (type) => {
  document.body.style.backgroundImage = `url("${backgroundImages[type]}")`;

  if (lastPlayed === type) {
    audios[type].pause();
    isPlaying = false;
    lastPlayed = null;
  } else {
    lastPlayed = type;
  }

  if (isPlaying) {
    icons[type].style.backgroundImage = `url("${_assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_4__}")`;
    audios[type].play();
  } else {
    audios[type].pause();
    isPlaying = false;
  }
};

allBtns.addEventListener("click", ({ target }) => {
  resetPauseIcon();
  resetAllAudio();

  if (target.closest("#sunny")) {
    isPlaying = true;
    updateUI("sunny");
  } else if (target.closest("#rainy")) {
    isPlaying = true;
    updateUI("rainy");
  } else {
    isPlaying = true;
    updateUI("snow");
  }
});

volumeInput.addEventListener("input", ({ target: { value } }) => {
  Object.keys(audios).forEach((type) => {
    audios[type].volume = value;
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZjBhOWJiMzIyMjU4MWI4YTQ0ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCc0I7QUFDdEI7QUFDOEM7QUFDRDtBQUNBO0FBQ0E7QUFDRztBQUNKO0FBQ0k7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0RBQVEsQ0FBQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBTTtBQUN6QixtQkFBbUIsb0RBQUk7QUFDdkIsa0JBQWtCLHNEQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtEQUFRO0FBQ2pCLFNBQVMsaURBQVE7QUFDakIsUUFBUSxrREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHVCQUF1QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG9EQUFLLENBQUM7QUFDdEQ7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5QyxVQUFVLFNBQVM7QUFDNUQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXguc2Nzcz9lOWVjIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5pbXBvcnQgc3VubnlCR0kgZnJvbSBcIi4vYXNzZXRzL3N1bW1lci1iZy5qcGdcIjtcclxuaW1wb3J0IHJhaW55QkdJIGZyb20gXCIuL2Fzc2V0cy9yYWlueS1iZy5qcGdcIjtcclxuaW1wb3J0IHNub3dCR0kgZnJvbSBcIi4vYXNzZXRzL3dpbnRlci1iZy5qcGdcIjtcclxuaW1wb3J0IHBhdXNlIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9wYXVzZS5zdmdcIjtcclxuaW1wb3J0IHN1bW1lciBmcm9tIFwiLi9hc3NldHMvc291bmRzL3N1bW1lci5tcDNcIjtcclxuaW1wb3J0IHJhaW4gZnJvbSBcIi4vYXNzZXRzL3NvdW5kcy9yYWluLm1wM1wiO1xyXG5pbXBvcnQgd2ludGVyIGZyb20gXCIuL2Fzc2V0cy9zb3VuZHMvd2ludGVyLm1wM1wiO1xyXG5cclxuY29uc3QgYWxsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuc1wiKTtcclxuY29uc3Qgdm9sdW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZvbHVtZUNvbnRyb2xcIik7XHJcblxyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3N1bm55QkdJfVwiKWA7XHJcbmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XHJcbmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXIgY2VudGVyXCI7XHJcblxyXG5jb25zdCBibHVyTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ibHVyTGF5ZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbmJsdXJMYXllci5zdHlsZS50b3AgPSBcIjBcIjtcclxuYmx1ckxheWVyLnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuYmx1ckxheWVyLnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xyXG5ibHVyTGF5ZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xyXG5ibHVyTGF5ZXIuc3R5bGUuekluZGV4ID0gXCItMVwiO1xyXG5ibHVyTGF5ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJpbmhlcml0XCI7XHJcbmJsdXJMYXllci5zdHlsZS5maWx0ZXIgPSBcImJsdXIoNXB4KVwiO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChibHVyTGF5ZXIpO1xyXG5cclxuY29uc3QgYXVkaW9zID0ge1xyXG4gIHN1bm55OiBuZXcgQXVkaW8oc3VtbWVyKSxcclxuICByYWlueTogbmV3IEF1ZGlvKHJhaW4pLFxyXG4gIHNub3c6IG5ldyBBdWRpbyh3aW50ZXIpLFxyXG59O1xyXG5jb25zdCBpY29ucyA9IHtcclxuICBzdW5ueTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5ueUljb25cIiksXHJcbiAgcmFpbnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFpbnlJY29uXCIpLFxyXG4gIHNub3c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc25vd0ljb25cIiksXHJcbn07XHJcblxyXG5jb25zdCBiYWNrZ3JvdW5kSW1hZ2VzID0ge1xyXG4gIHN1bm55OiBzdW5ueUJHSSxcclxuICByYWlueTogcmFpbnlCR0ksXHJcbiAgc25vdzogc25vd0JHSSxcclxufTtcclxuXHJcbk9iamVjdC52YWx1ZXMoYXVkaW9zKS5mb3JFYWNoKChhdWRpbykgPT4ge1xyXG4gIGF1ZGlvLmxvb3AgPSB0cnVlO1xyXG59KTtcclxuXHJcbmNvbnN0IHJlc2V0UGF1c2VJY29uID0gKCkgPT4ge1xyXG4gIE9iamVjdC52YWx1ZXMoaWNvbnMpLmZvckVhY2goKGljb24pID0+IChpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCIpKTtcclxufTtcclxuXHJcbmNvbnN0IHJlc2V0QWxsQXVkaW8gPSAoKSA9PiB7XHJcbiAgT2JqZWN0LnZhbHVlcyhhdWRpb3MpLmZvckVhY2goKG1wMykgPT4gbXAzLnBhdXNlKCkpO1xyXG59O1xyXG5cclxubGV0IGlzUGxheWluZyA9IGZhbHNlO1xyXG5sZXQgbGFzdFBsYXllZCA9IG51bGw7XHJcblxyXG5jb25zdCB1cGRhdGVVSSA9ICh0eXBlKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtiYWNrZ3JvdW5kSW1hZ2VzW3R5cGVdfVwiKWA7XHJcblxyXG4gIGlmIChsYXN0UGxheWVkID09PSB0eXBlKSB7XHJcbiAgICBhdWRpb3NbdHlwZV0ucGF1c2UoKTtcclxuICAgIGlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgbGFzdFBsYXllZCA9IG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxhc3RQbGF5ZWQgPSB0eXBlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzUGxheWluZykge1xyXG4gICAgaWNvbnNbdHlwZV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGF1c2V9XCIpYDtcclxuICAgIGF1ZGlvc1t0eXBlXS5wbGF5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGF1ZGlvc1t0eXBlXS5wYXVzZSgpO1xyXG4gICAgaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuYWxsQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKHsgdGFyZ2V0IH0pID0+IHtcclxuICByZXNldFBhdXNlSWNvbigpO1xyXG4gIHJlc2V0QWxsQXVkaW8oKTtcclxuXHJcbiAgaWYgKHRhcmdldC5jbG9zZXN0KFwiI3N1bm55XCIpKSB7XHJcbiAgICBpc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgdXBkYXRlVUkoXCJzdW5ueVwiKTtcclxuICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KFwiI3JhaW55XCIpKSB7XHJcbiAgICBpc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgdXBkYXRlVUkoXCJyYWlueVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIHVwZGF0ZVVJKFwic25vd1wiKTtcclxuICB9XHJcbn0pO1xyXG5cclxudm9sdW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICBPYmplY3Qua2V5cyhhdWRpb3MpLmZvckVhY2goKHR5cGUpID0+IHtcclxuICAgIGF1ZGlvc1t0eXBlXS52b2x1bWUgPSB2YWx1ZTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==