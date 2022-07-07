// Aside: .map() challenge
const guestList = ["Tom", "Mary", "Clare", "John", "Liz"];

// const guestsHtml = []

// for (let i = 0; i < guestList.length; i++){
//     guestsHtml.push(`<div class="box">${guestList[i]}</div>`)
// }

guestsHtml = guestList
  .map((guest) => `<div class="box">${guest}</div>`)
  .join(" ");

document.getElementById("list").innerHTML = guestsHtml;
