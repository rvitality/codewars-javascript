// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
// ! Sort and Star ---------------

const twoSort = str => str.sort()[0].split("").join("***");

console.log(
    twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])
);
