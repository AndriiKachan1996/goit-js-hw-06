const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerEl = document.getElementById("ingredients");

const makeIngrient = () => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.classList.add("ingredient");
    return liEl;
  });
};

const liElCollection = makeIngrient();
ingredientsContainerEl.append(...liElCollection);
