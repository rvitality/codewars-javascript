// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

// ! Even numbers in an array ---------------

const evenNumbers = (array, limit) => array.filter(num => num % 2 === 0).slice(-limit);
