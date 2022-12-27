const incrEl = document.querySelector('[data-action="increment"]');
const deckEl = document.querySelector('[data-action="decrement"]');
const value = document.getElementById("value");

let counterValue = 0;

incrEl.addEventListener("click", increment);
deckEl.addEventListener("click", decrement);

function increment() {
  counterValue++;
  value.textContent = counterValue;
}

function decrement() {
  counterValue--;
  value.textContent = counterValue;
}
