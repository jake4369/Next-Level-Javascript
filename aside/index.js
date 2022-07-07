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

// Aside: new Array constructor and Array.fill()
/*
const coins = new Array(10).fill("🪙");
console.log(coins);

const poisonMushrooms = new Array(1000).fill("🍄");
console.log(poisonMushrooms);
*/
