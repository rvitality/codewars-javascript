// find numbers with duplicates in an array

const numbers = [2, 5, 5, 3, 6, 7, 2, 1, 4, 6, 7, 2, 4, 3, 1, 6, 7, 5, 7, 2];

// const findDuplicates = arr => [...new Set(arr)];
const findDuplicates = arr => arr.filter((num, index, array) => array.indexOf(num) === index);
console.log(findDuplicates(numbers));
