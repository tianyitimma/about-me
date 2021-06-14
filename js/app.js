"use strict";

// Get the user name
let user = prompt('Please enter your name.');

// Making sure the user name are letters
while (!user || !(/[a-zA-Z]/).test(user)) {
  user = prompt('It\'s not a proper name. Please enter your name.');
}

// Creating a personalized greeting when there's an input from the user

  alert('Hi, ' + user + '! Welcome to this page to learn about me. Before we start, I would love to play a guessing game with you.');


let correctCount = 0;

// 5 prompts that accecpt y/n or yes/no
// Q1
function Q1 () {

let sport = prompt('Do I play any sports? Please answer yes or no.');
let sportLower = sport.toLowerCase();
//console.log(sport);
//console.log(sportLower);

// only accept y/n or yes/no

while (sportLower !== 'y' && sportLower !== 'yes' && sportLower !== 'n' && sportLower !== 'no'){
  sport = prompt('Please answer yes or no only.');
  sportLower = sport.toLowerCase();
}
  if (sportLower === 'y' || sportLower === 'yes'){
    alert('I love to play tennis.');
    correctCount++;
  } else if (sportLower === 'n' || sportLower === 'no'){
    alert('Nice try, but I do like to play tennis.');
  } 
}

Q1();

// Q2
function Q2 () {
let games = prompt('Do I like to play board games? Please answer yes or no.');
let gamesLower = games.toLowerCase();
//console.log(games);
//console.log(gamesLower);

while (gamesLower !== 'y' && gamesLower !== 'yes' && gamesLower !== 'n' && gamesLower !== 'no'){
  games = prompt('Please answer yes or no only.');
  gamesLower = games.toLowerCase();
}
  if (gamesLower === 'y' || gamesLower === 'yes'){
    alert('Great! I love to play Agricola!');
    correctCount++;
  } else if (gamesLower === 'n' || gamesLower === 'no'){
    alert('Maybe I can show you my collections.'); 
  } 
}

Q2();

// Q3
function Q3 () {
let videoGames = prompt('Do I play any video games? Please answer yes or no.');
let videoGamesLower = videoGames.toLowerCase();
//console.log(videoGames);
//console.log(videoGamesLower);

while (videoGamesLower !== 'y' && videoGamesLower !== 'yes' && videoGamesLower !== 'n' && videoGamesLower !== 'no'){
  videoGames = prompt('Please answer yes or no only.');
  videoGamesLower = videoGames.toLowerCase();
}
  if (videoGamesLower === 'y' || videoGamesLower === 'yes'){
    alert('Nice! I love to play Halo!');
    correctCount++;
  } else if (videoGamesLower === 'n' || videoGamesLower === 'no'){
    alert('Nice try, but I do like to play Halo.');
  } 
}

Q3();

// Q4
function Q4 () {
let movie = prompt('Do I like supper hero movies? Please answer yes or no.');
let movieLower = movie.toLowerCase();
//console.log(movie);
//console.log(movieLower);

while (movieLower !== 'y' && movieLower !== 'yes' && movieLower !== 'n' && movieLower !== 'no'){
  movie = prompt('Please answer yes or no only.');
  movieLower = movie.toLowerCase();
}
  if (movieLower === 'y' || movieLower === 'yes'){
    alert('Wonderful! I really like Iron Man');
    correctCount++;
  } else if (movieLower === 'n' || movieLower === 'no'){
    alert('Nice try, but I do like Iron Man.');
  } 
}

Q4();

// Q5
function Q5() {
let code = prompt('Do I like to code? Please answer yes or no.');
let codeLower = code.toLowerCase();
//console.log(code);
//console.log(codeLower);

while (codeLower !== 'y' && codeLower !== 'yes' && codeLower !== 'n' && codeLower !== 'no'){
  code = prompt('Please answer yes or no only.');
  codeLower = code.toLowerCase();
}
  if (codeLower === 'y' || codeLower === 'yes'){
    alert('I do like to code');
    correctCount++;
  } else if (codeLower === 'n' || codeLower === 'no'){
    alert('It was close. I wasn\'t like to code when I was in undergrad.');
  } 
}

Q5();

// Q6
function Q6() {
let numberOfTries = 4;
let myNumber = Math.floor(Math.random() *100) + 1;
console.log(numberOfTries, myNumber);
let result = false;
let guess = prompt('Can you guess what is my favorite number between 1 to 100? You will have ' + numberOfTries + ' times to try.')
// asking for 4 times
while (numberOfTries > 1) {
  numberOfTries--;
  //console.log(numberOfTries);

  if (guess == myNumber){
    alert('You got it right! My favorite number is ' + myNumber + '.');
    result = true;
    correctCount++;
    break;
  } else if (guess < myNumber && numberOfTries > 1){
    guess = prompt('Your guess is too low. Please try again. ' + numberOfTries + ' tries left.');
  } else if (guess > myNumber && numberOfTries > 1){
    guess = prompt('Your guess is too high. Please try again. ' + numberOfTries + ' tries left.');
  } else if (guess < myNumber && numberOfTries == 1){
    guess = prompt('Your guess is too low. This is your last try, but don\'t worry. I will reveal the answer if you didn\'t get it right.');
  } else if (guess > myNumber && numberOfTries == 1){
    guess = prompt('Your guess is too high. Please try again. This is your last try, but don\'t worry. I will reveal the answer if you didn\'t get it right.');
  } 
}
if (result == false){
  alert('My favorite number is ' + myNumber + '.');
}
}

Q6();

// Q7 multiple possible correct answers that are srored in an array, 6 attempts, end with a correct answer or run out of attempts, display all the correct answer 
function Q7() {
let myFruit = ['watermelon', 'peach', 'cherry', 'figs', 'mango'];
let numberForQ7 = 6;
let resultForQ7 = false;
let yourFruit = prompt("Can you guess what is my favorite fruit? You have " + numberForQ7 + " times to try.");
let yourFruitLowerCase = yourFruit.toLowerCase();


while (numberForQ7 > 0 && resultForQ7 == false){
  
  for (let i = 0; i < myFruit.length; i++){
    if (yourFruitLowerCase === myFruit[i]) {
      alert('You got it. Here is a list of my favorite fruits: ' + myFruit + '.');
      correctCount++;
      resultForQ7 = true;
      console.log(correctCount, resultForQ7);
      break;
    }
  
  }
  numberForQ7--;
  if (numberForQ7>1 && resultForQ7 != true){  
    yourFruit = prompt("It is not my favorite fruit. Please try again. You have " + numberForQ7 + " times to try.");
    yourFruitLowerCase = yourFruit.toLowerCase();
    console.log('if statment');
  } else if (numberForQ7 == 1 && resultForQ7 != true){
    yourFruit = prompt("This is your last try.");
    yourFruitLowerCase = yourFruit.toLowerCase();
    console.log('else if statment');
  }

}

if (resultForQ7 == false){
  alert('My favorite fruits are ' + myFruit + '.');
}
}

Q7();

alert('Thank you, ' + user + '! You got ' + correctCount + ' out of 7 correct. Now it\'s time for you to learn about me.');