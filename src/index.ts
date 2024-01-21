import "./index.scss";

const sunnyBGI = require("./assets/summer-bg.jpg");
const rainyBGI = require("./assets/rainy-bg.jpg");
const snowBGI = require("./assets/winter-bg.jpg");
const pause = require("./assets/icons/pause.svg");
const summer = require("./assets/sounds/summer.mp3");
const rain = require("./assets/sounds/rain.mp3");
const winter = require("./assets/sounds/winter.mp3");

const allBtns = document.querySelector(".btns") as HTMLButtonElement;
const volumeInput = document.querySelector(
  "#volumeControl"
) as HTMLInputElement;

document.body.style.backgroundImage = `url("${sunnyBGI}")`;
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

interface IAudios {
  [key: string]: HTMLAudioElement;
}

interface IIcons {
  sunny: HTMLDivElement | null;
  rainy: HTMLDivElement | null;
  snow: HTMLDivElement | null;
}

interface IBackgroundImages {
  [key: string]: string;
}

const audios: IAudios = {
  sunny: new Audio(summer),
  rainy: new Audio(rain),
  snow: new Audio(winter),
};
const icons: IIcons = {
  sunny: document.querySelector(".sunnyIcon"),
  rainy: document.querySelector(".rainyIcon"),
  snow: document.querySelector(".snowIcon"),
};

const backgroundImages: IBackgroundImages = {
  sunny: sunnyBGI,
  rainy: rainyBGI,
  snow: snowBGI,
};

const resetPauseIcon = () =>
  Object.values(icons).forEach(
    (icon: HTMLDivElement) => (icon.style.backgroundImage = "")
  );

const resetAllAudio = () =>
  Object.values(audios).forEach((mp3: HTMLAudioElement) => mp3.pause());

let isPlaying: boolean = false;
let lastPlayed: null | string = null;

const updateUI = (type: keyof IIcons) => {
  document.body.style.backgroundImage = `url("${backgroundImages[type]}")`;

  if (lastPlayed === type) {
    audios[type].pause();
    isPlaying = false;
    lastPlayed = null;
  } else {
    lastPlayed = type;
  }

  const icon = icons[type];

  if (icon) {
    if (isPlaying) {
      icon.style.backgroundImage = `url("${pause}")`;
      audios[type].play();
    } else {
      audios[type].pause();
      isPlaying = false;
    }
  }
};

allBtns.addEventListener(
  "click",
  ({ target }: { target: EventTarget | null }) => {
    resetPauseIcon();
    resetAllAudio();

    if (target && (target as HTMLElement).closest("#sunny")) {
      isPlaying = true;
      updateUI("sunny");
    } else if (target && (target as HTMLElement).closest("#rainy")) {
      isPlaying = true;
      updateUI("rainy");
    } else {
      isPlaying = true;
      updateUI("snow");
    }
  }
);

volumeInput.addEventListener("input", (event: Event) => {
  const inputValue = event.target as HTMLInputElement | null;

  if (inputValue) {
    const targetValue: number = parseFloat(inputValue.value);
    Object.keys(audios).forEach((type: keyof IAudios) => {
      audios[type].volume = targetValue;
    });
  }
});
