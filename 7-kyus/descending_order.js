// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

/*

    Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

*/

// ! Descending Order  ---------------
const descendingOrder = numbers => parseInt([...`${numbers}`].sort((a, b) => b - a).join(""));
