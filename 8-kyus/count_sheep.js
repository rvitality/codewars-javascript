// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// !  If you can't sleep, just count sheep!! ---------------
const countSheep = num =>
    Array(num)
        .fill(0)
        .map((_, index) => `${index + 1} sheep...`)
        .join("");
