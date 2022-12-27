function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls>input");
const magicBtnEl = document.querySelector("button[data-create]");
const buttonResetEl = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");

magicBtnEl.addEventListener("click", makeBox);

const createBoxes = (amount) => {
  const elementsColection = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsColection.push(div);
  }
  return elementsColection;
};

function makeBox() {
  let boxesToAdd = createBoxes(inputEl.value);
  boxEl.append(...boxesToAdd);
}

console.log(inputEl.value);
buttonResetEl.addEventListener("click", () => {
  onReset.call();
});

const onReset = () => {
  boxEl.innerHTML = "";
};
