"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
const summer_bg_jpg_1 = __importDefault(require("./assets/summer-bg.jpg"));
const rainy_bg_jpg_1 = __importDefault(require("./assets/rainy-bg.jpg"));
const winter_bg_jpg_1 = __importDefault(require("./assets/winter-bg.jpg"));
const pause_svg_1 = __importDefault(require("./assets/icons/pause.svg"));
const summer_mp3_1 = __importDefault(require("./assets/sounds/summer.mp3"));
const rain_mp3_1 = __importDefault(require("./assets/sounds/rain.mp3"));
const winter_mp3_1 = __importDefault(require("./assets/sounds/winter.mp3"));
const allBtns = document.querySelector(".btns");
const volumeInput = document.querySelector("#volumeControl");
document.body.style.backgroundImage = `url("${summer_bg_jpg_1.default}")`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
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
    sunny: new Audio(summer_mp3_1.default),
    rainy: new Audio(rain_mp3_1.default),
    snow: new Audio(winter_mp3_1.default),
};
const icons = {
    sunny: document.querySelector(".sunnyIcon"),
    rainy: document.querySelector(".rainyIcon"),
    snow: document.querySelector(".snowIcon"),
};
console.log(typeof icons.rainy);
const backgroundImages = {
    sunny: summer_bg_jpg_1.default,
    rainy: rainy_bg_jpg_1.default,
    snow: winter_bg_jpg_1.default,
};
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
    }
    else {
        lastPlayed = type;
    }
    if (isPlaying) {
        icons[type].style.backgroundImage = `url("${pause_svg_1.default}")`;
        audios[type].play();
    }
    else {
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
    }
    else if (target.closest("#rainy")) {
        isPlaying = true;
        updateUI("rainy");
    }
    else {
        isPlaying = true;
        updateUI("snow");
    }
});
volumeInput.addEventListener("input", ({ target: { value } }) => {
    Object.keys(audios).forEach((type) => {
        audios[type].volume = value;
    });
});
