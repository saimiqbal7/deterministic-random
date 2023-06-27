const MersenneTwister = require('mersenne-twister');

function getPredictableRandomNumber(seed, submissions) {
  const mt = new MersenneTwister(seed);
  const num = mt.random();
  const rand = Math.floor(num*submissions)
  return rand;
}


const seed = 4559; // ROUND NUMBER OF THE TASK
const submissions = 10;  // TOTAL SUBMISSIONS
const randomNumber = getPredictableRandomNumber(seed, submissions);

console.log(randomNumber);
