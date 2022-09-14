// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// ! Convert number to reversed array of digits ---------------
const digitize = number => [...`${number}`].reverse().map(num => +num);
// return String(n).split('').map(Number).reverse()
