const pictures = document.querySelector(".pictures");
const container = document.querySelector(".container");
let localStorageScreen = localStorage.getItem("screen");
if (localStorageScreen) {
  container.setAttribute("style", localStorageScreen);
}

pictures.addEventListener("click", (e) => {
  const screen = `background-image:url('./img/${e.target.className}.jpg')`;
  container.setAttribute("style", screen);
  localStorage.setItem("screen", screen);
});
