var MersenneTwister = require('mersenne-twister');

function getPredictableRandomNumber(seed) {
  var mt = new MersenneTwister(seed);
  return mt.random();
}

// Usage
var seed = 24;
var randomNumber = getPredictableRandomNumber(seed);

console.log(randomNumber);
