const itemEl = document.querySelectorAll(".item");
console.log("Nuber of catagories: " + itemEl.length);

itemEl.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const amount = item.lastElementChild.children.length.toString();
  console.log("Catagory : ", categoryName);
  console.log("Elenents : ", amount);
});
