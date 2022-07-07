// Aside: chaining .fill() and .map() onto a new Array
const poisonMushrooms = new Array(10)
  .fill("🍄")
  .map((mushroom) => `<div class="box">${mushroom}</div>`)
  .join(" ");

document.getElementById("mushrooms").innerHTML = poisonMushrooms;
