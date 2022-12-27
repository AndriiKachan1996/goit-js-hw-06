const categoriesEl = document.getElementById("categories");
const itemEl = document.querySelector(".item");

console.log(`Numbers of caregories : ${categoriesEl.children.length}`);
console.log(`Category : ${itemEl.firstElementChild.textContent}`);
console.log(`Elements : ${itemEl.lastElementChild.children.length}`);
console.log(
  `Category: ${categoriesEl.children[1].firstElementChild.textContent}`
);
console.log(
  `Elements : ${categoriesEl.children[1].lastElementChild.children.length}`
);

console.log(
  `Category : ${categoriesEl.lastElementChild.firstElementChild.textContent}`
);

console.log(
  `Elements : ${categoriesEl.lastElementChild.lastElementChild.children.length}`
);
