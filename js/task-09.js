function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", makeMagic);

const color = getRandomHexColor();
spanEl.textContent = color;
bodyEl.style.backgroundColor = color;

function makeMagic() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}
