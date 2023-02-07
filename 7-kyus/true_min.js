// https://www.codewars.com/kata/52378b3ee72f21e1ea000045/train/javascript

// ! True Min ---------------

const min = (a, b) => (isNaN(a) || isNaN(b) ? NaN : a < b ? +a : +b);
