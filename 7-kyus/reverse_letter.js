// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

// ! Check the exam ---------------
const reverseLetter = str =>
    [...str]
        .filter(el => el.match(/[a-z]/i))
        .reverse()
        .join("");
