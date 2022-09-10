// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// ! Array plus array ---------------
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((sum, num) => sum + num, 0);
