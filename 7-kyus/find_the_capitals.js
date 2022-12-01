// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// ! Find the capitals ---------------
const capitals = word =>
    [...word]
        .map((letter, index) => (letter.toUpperCase() === letter ? index : null))
        .filter(Number.isInteger);
