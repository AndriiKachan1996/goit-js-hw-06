const refs = {
  inpurEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};

const onInputChange = (event) =>
  refs.inpurEl.value != ""
    ? (refs.spanEl.textContent = refs.inpurEl.value)
    : (refs.spanEl.textContent = "Anonymous");

refs.inpurEl.addEventListener("input", onInputChange);
