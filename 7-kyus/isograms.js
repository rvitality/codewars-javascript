// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// ! Isograms ---------------

const isIsogram = str => new Set(str.toLowerCase()).size === str.length;

// const isIsogram = str =>
//     new Set([...str].map(letter => letter.toLowerCase())).size === str.length;
