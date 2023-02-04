// https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript

// ! Largest Elements ---------------

const largest = (n, arr) => (n === 0 ? [] : arr.sort((a, b) => a - b).slice(-n));
console.log(largest(0, [1, 2, 3, 4]));
