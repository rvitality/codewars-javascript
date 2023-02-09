// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

// ! Price of Mangoes
const mango = (quantity, price) => Math.ceil((quantity / 3) * 2) * price;
console.log(mango(2));
console.log(mango(3));
console.log(mango(4));
console.log(mango(5));
console.log(mango(6));

// 2    2
// 3    2

// 4    3

// 5    4
// 6    4

// 7    5

// 8    6
// 9    6

// 10   7

// 11   8
// 12   8
