// Aside: Object destructuring
/*
const favouriteFilm = {
  title: "Top Gun",
  year: "1986",
  genre: "action",
  star: "Tom Cruise",
  director: "Tony Scott",
};

const { title, year, genre, star, director } = favouriteFilm;

console.log(
  `My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}`
);
*/

// Aside: Object destructuring challenge
/*
const dreamHoliday = {
  destination: "Montego Bay, Jamaica",
  activity: "swim in the sea",
  accommodation: "Hotel Montego Bay",
  companion: "Megan Fox",
};

const { destination, activity, accommodation, companion } = dreamHoliday;

console.log(`I would love to go to ${destination}, to ${activity}. 
I'd sleep at ${accommodation} and hang out with ${companion} all day.`);
*/

// Aside: .map()
/*
const energyCostEuros = [140, 153, 164, 153, 128, 146];
const exchangeRate = 1.13;

// const energyCostDollars = [];

// for (let i = 0; i < energyCostEuros.length; i++) {
//   energyCostDollars.push(energyCostEuros[i] * exchangeRate);
// }

const energyCostDollars = energyCostEuros.map((el) => el * exchangeRate);

console.log(energyCostDollars);
*/

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
