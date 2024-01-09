import "./index.scss";
import sunnyBGI from "./assets/summer-bg.jpg";
import rainyBGI from "./assets/rainy-bg.jpg";
import snowBGI from "./assets/winter-bg.jpg";
import pause from "./assets/icons/pause.svg";

// const sunnyBtn = document.querySelector(".sunny");
// const rainyBtn = document.querySelector(".rainy");
// const snowBtn = document.querySelector(".snow");
const allBtns = document.querySelector(".btns");
// const inputRange = document.querySelector("input");
const sunnyIcon = document.querySelector(".sunnyIcon");
const rainyIcon = document.querySelector(".rainyIcon");
const snowIcon = document.querySelector(".snowIcon");
const allIcons = document.querySelectorAll(".icons");

document.body.style.backgroundImage = `url("${sunnyBGI}")`;

const resetPauseIcon = (iconType) => {
  switch (iconType) {
    case "sunny":
      sunnyIcon.style.backgroundImage = "";
      break;
    case "rainy":
      rainyIcon.style.backgroundImage = "";
      break;
    case "snow":
      snowIcon.style.backgroundImage = "";
      break;
  }
};

allBtns.addEventListener("click", (event) => {
  const { target } = event;

  if (target.closest(".sunny")) {
    resetPauseIcon("sunny");
    document.body.style.backgroundImage = `url("${sunnyBGI}")`;
    sunnyIcon.style.backgroundImage = `url("${pause}")`;
  } else if (target.closest(".rainy")) {
    document.body.style.backgroundImage = `url("${rainyBGI}")`;
    rainyIcon.style.backgroundImage = `url("${pause}")`;
  } else {
    document.body.style.backgroundImage = `url("${snowBGI}")`;
    snowIcon.style.backgroundImage = `url("${pause}")`;
  }
});
