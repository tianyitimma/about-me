"use strict";

// Get the user name
let user = prompt('Please enter your name.');

// Creating a personalized greeting when there's an input from the user
if (user !== '' && user !== null){
  alert('Hi, ' + user + '! Welcome to this page to learn about me. Before we start, I would love to learn something about you first by asking you these five questions.');
}

// 5 prompts that accecpt y/n or yes/no

let sport = prompt('Do you play any sports? Please answer yes or no.');
let sportLower = sport.toLowerCase();
console.log(sport);
console.log(sportLower);
if (sportLower === 'y' || sportLower === 'yes'){
  alert('Awesome! I love to play sports too!');
} else if (sportLower === 'n' || sportLower === 'no'){
  alert('Maybe we can find something else to do.');
} else {
  alert('Please answer either yes or no.');
}

let games = prompt('Do you play any games? Please answer yes or no.');
let gamesLower = games.toLowerCase();
console.log(games);
console.log(gamesLower);
if (gamesLower === 'y' || gamesLower === 'yes'){
  alert('Great! I love to play games!');
} else if (gamesLower === 'n' || gamesLower === 'no'){
  alert('Maybe we can find something else to do.');
} else {
  alert('Please answer either yes or no.');
}

let videoGames = prompt('Do you play any video games? Please answer yes or no.');
let videoGamesLower = videoGames.toLowerCase();
console.log(videoGames);
console.log(videoGamesLower);
if (videoGamesLower === 'y' || videoGamesLower === 'yes'){
  alert('Nice! I love to play halo!');
} else if (videoGamesLower === 'n' || videoGamesLower === 'no'){
  alert('Maybe we can find something else to do.');
} else {
  alert('Please answer either yes or no.');
}

let movie = prompt('Do you like to watch movie? Please answer yes or no.');
let movieLower = movie.toLowerCase();
console.log(movie);
console.log(movieLower);
if (movieLower === 'y' || movieLower === 'yes'){
  alert('Wonderful! Let\'s watch movie next week.');
} else if (movieLower === 'n' || movieLower === 'no'){
  alert('Maybe we can find something else to do.');
} else {
  alert('Please answer either yes or no.');
}

let ufo = prompt('Have you ever seen a UFO? Please answer yes or no.');
let ufoLower = ufo.toLowerCase();
console.log(ufo);
console.log(ufoLower);
if (ufoLower === 'y' || ufoLower === 'yes'){
  alert('Really! Did you take a picture by any chance?');
} else if (ufoLower === 'n' || ufoLower === 'no'){
  alert('Me neither. Let me know if you see one in the future.');
} else {
  alert('Please answer either yes or no.');
}

alert('Thank you, ' + user + '! Now it\'s time for you to learn about me.');