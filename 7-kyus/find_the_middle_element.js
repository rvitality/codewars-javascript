// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

// ! Find the middle element ---------------

const gimme = triplet =>
    triplet.findIndex(num => num === [...triplet].sort((a, b) => a - b).slice(1, 2)[0]);
