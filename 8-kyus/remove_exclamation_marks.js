// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

// ! Remove exclamation marks  ---------------
const removeExclamationMarks = string => string.split("!").join("");

// if `split` is not an option
// const removeExclamationMarks = string => [...string].filter(char => char !== "!").join("")
