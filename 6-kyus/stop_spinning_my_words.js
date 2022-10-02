// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// ! Stop gninnipS My sdroW! ---------------
const spinWords = words =>
    words
        .split(" ")
        .map(word => (word.length >= 5 ? [...word].reverse().join("") : word))
        .join(" ");
