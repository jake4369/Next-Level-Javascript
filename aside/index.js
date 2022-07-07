// Aside: Object destructuring
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

// Aside: Object destructuring challenge
const dreamHoliday = {
  destination: "Montego Bay, Jamaica",
  activity: "swim in the sea",
  accommodation: "Hotel Montego Bay",
  companion: "Megan Fox",
};

const { destination, activity, accommodation, companion } = dreamHoliday;

console.log(`I would love to go to ${destination}, to ${activity}. 
I'd sleep at ${accommodation} and hang out with ${companion} all day.`);
