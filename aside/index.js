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

// Aside: Constructor functions
/*
const animalForRelease1 = {
  name: "Tilly",
  species: "tiger",
  weightKg: 56,
  age: 2,
  dateOfRelease: "03-02-2022",
};
const animalForRelease2 = {
  name: "Nelly",
  species: "elephant",
  weightKg: 320,
  age: 16,
  dateOfRelease: "03-02-2022",
};

function Animal(data) {
  this.name = data.name;
  this.species = data.species;
  this.weightKg = data.weightKg;
  this.age = data.age;
  this.dateOfRelease = data.dateOfRelease;
}

const tillyTheTiger = new Animal(animalForRelease1);
const nellyTheElephant = new Animal(animalForRelease2);
console.log(tillyTheTiger);
console.log(nellyTheElephant);
*/

// Aside: Constructor functions challenge
/*
const hotel1 = {
  name: "Safari View",
  rooms: 30,
  stars: "⭐⭐⭐⭐⭐",
  costPerNightAdult: "240",
};

const hotel2 = {
  name: "Leopard Mansion",
  rooms: 96,
  stars: "⭐⭐⭐",
  costPerNightAdult: "120",
};

function NationParkHotels(data) {
  this.name = data.name;
  this.rooms = data.rooms;
  this.stars = data.stars;
  this.costPerNightAdult = data.costPerNightAdult;
}

const safariViewHotel = new NationParkHotels(hotel1);
const leopardMansionHotel = new NationParkHotels(hotel2);

console.log(safariViewHotel);
console.log(leopardMansionHotel);
*/

// Aside: Methods on constructor functions
/*
const animalForRelease1 = {
  name: "Tilly",
  species: "tiger",
  weightKg: 56,
  age: 2,
  dateOfRelease: "03-02-2022",
};
const animalForRelease2 = {
  name: "Nelly",
  species: "elephant",
  weightKg: 320,
  age: 16,
  dateOfRelease: "03-02-2022",
};

function Animal(data) {
  this.name = data.name;
  this.species = data.species;
  this.weightKg = data.weightKg;
  this.age = data.age;
  this.dateOfRelease = data.dateOfRelease;

  this.summeriseAnimal = function () {
    console.log(
      `${this.name} is a ${this.age} year old ${this.species} which weighs ${this.weightKg}kg and was released into the wild on ${this.dateOfRelease}`
    );
  };
}

const tillyTheTiger = new Animal(animalForRelease1);
const nellyTheElephant = new Animal(animalForRelease2);

tillyTheTiger.summeriseAnimal();
nellyTheElephant.summeriseAnimal();
*/

// Aside: Methods on constructor functions challenge
const hotel1 = {
  name: "Safari View",
  rooms: 30,
  stars: "⭐⭐⭐⭐⭐",
  costPerNightAdult: 240,
  costPerNightChild: 180,
};

const hotel2 = {
  name: "Leopard Mansion",
  rooms: 96,
  stars: "⭐⭐⭐",
  costPerNightAdult: 120,
  costPerNightChild: 180,
};

function NationalParkHotels(data) {
  this.name = data.name;
  this.rooms = data.rooms;
  this.stars = data.stars;
  this.costPerNightAdult = data.costPerNightAdult;
  this.costPerNightChild = data.costPerNightChild;

  this.summeriseHotel = function () {
    let price = 2 * this.costPerNightAdult + 2 * this.costPerNightChild;

    console.log(
      `A one night stay at the ${this.name} for two adults and two children costs a total of £${price}`
    );
  };
}

const safariView = new NationalParkHotels(hotel1);
const leopardManor = new NationalParkHotels(hotel2);

safariView.summeriseHotel();
leopardManor.summeriseHotel();
