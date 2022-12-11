// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// ! Array.diff ---------------
const arrayDiff = (arr1, arr2) => arr1.filter(x => ![...new Set(arr2)].includes(x));
