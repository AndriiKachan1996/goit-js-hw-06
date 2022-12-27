const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerEl = document.getElementById("ingredients");

const makeIngrient = (arrOfIngredients) => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.classList.add("ingredient");
    return liEl;
  });
};

const liElCollection = makeIngrient(ingredients);
ingredientsContainerEl.append(...liElCollection);
