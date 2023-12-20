// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// ! Sum of positive --------------
const positiveSum = (arr) =>
    arr.reduce((sum, num) => sum + (num > 0 ? num : 0), 0);
