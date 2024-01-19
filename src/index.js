import "./index.scss";

import sunnyBGI from "./assets/summer-bg.jpg";
import rainyBGI from "./assets/rainy-bg.jpg";
import snowBGI from "./assets/winter-bg.jpg";
import pause from "./assets/icons/pause.svg";
import summer from "./assets/sounds/summer.mp3";
import rain from "./assets/sounds/rain.mp3";
import winter from "./assets/sounds/winter.mp3";

const allBtns = document.querySelector(".btns");
const volumeInput = document.querySelector("#volumeControl");

document.body.style.backgroundImage = `url("${sunnyBGI}")`;
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
  sunny: new Audio(summer),
  rainy: new Audio(rain),
  snow: new Audio(winter),
};
const icons = {
  sunny: document.querySelector(".sunnyIcon"),
  rainy: document.querySelector(".rainyIcon"),
  snow: document.querySelector(".snowIcon"),
};

const backgroundImages = {
  sunny: sunnyBGI,
  rainy: rainyBGI,
  snow: snowBGI,
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
    icons[type].style.backgroundImage = `url("${pause}")`;
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
