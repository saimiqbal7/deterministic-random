const MersenneTwister = require('mersenne-twister');

function getPredictableRandomNumber(seed, submissions) {
  const mt = new MersenneTwister(seed);
  const num = mt.random();
  const rand = Math.floor(num*submissions)
  return rand;

}


const sampleAddresses = [

  '3drDFVzgBKEffSM7vxjFBpSSS3572Vd2jq7ScfmhR5Zy',
  '3hsaXQ6QVNwmCsfXwSos1VxmTnoiqbULH75BozRUXAXA',
  '66Dkzg5BuJVg1yjZPDwtrMGcto915AATbrjJWEpvXFQq',
  '6EBksv19vS3Rtp6shsgYQDcjTN1FM4G98zvKExReroJe',
  '6nFt84G9M1YRHy6ifbNREVNXWeikotGmXNwfRjEqmyKs',
  '7xyDK4XMUk6fLtVJE2SYvTfiLsw72Jy65q59Vu3VfJa6',
  '92G5ZSR131W1NWdrbwDGGM1zskQYa4rqMgk1vfwjZZvx',
  '9sa3rQ3sHos91LV1TLRix479vZLyd2ViLWtrJ5zWqdLE',
  'AoZ4PCJWbvrTbXD2cFR8ZJVmwaPhM644hE3stRJpPVcF',
  'B2NcKjFcLpoz9Xghi9hovgnS9pudBT6zjwxBEmEMq2h1',
  'CPbYd7r7NvdXQwo8m4wgv4M7phB9rmo18UcxFNc2erF8',
  'D4cZgqCcgX8ukNXr1MZAVvMVopNcCYdjaGiXKkLaDKA1',
  'DNP8ksQKmCWpMjGJAMuSyQ2yiAMoGorrck2o6rJLv8eP',
  'ENgKwPp59N1yq65jmqL2xdkWjYTCyMfFgpithCFYAFhQ',
  'EkpVB3v1MvFgfAVmMmCP39KvHwJrhien59pk3EU7ySG2',
  'EtnEHFiGgsSqJw2gKHHJa6fuKgK9y9G5MNPVPrcwUWLs',
  'FR4kmw99YE8JS3pBvK5ASLZNW3AvsqNXYqAJL861ZQ6W',
  'FsJiRrFi8FH6KUm7pfW8zLAphLm7TYUqHb1XyMiaj6mW',
  'GtUSvLB815tj5H57m9zUuqdFS35j9UWhTaUGY7VwvxGY',
  'HvoFQLvG7g8bPSufCmJpd4v8LHcXJAUnV2b2biGGwenH'
]

const seed = 4559; // ROUND NUMBER 
const submissions = sampleAddresses.length;  // TOTAL SUBMISSIONS
const randomNumber = getPredictableRandomNumber(seed, submissions);
const winner = sampleAddresses[randomNumber]


console.log("random number:" + randomNumber);
console.log("winner: " + winner)