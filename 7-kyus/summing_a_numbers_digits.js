// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

// ! Check the exam ---------------
const sumDigits = numbers => [...`${Math.abs(numbers)}`].reduce((sum, num) => sum + +num, 0);
