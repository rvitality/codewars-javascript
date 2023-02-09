// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

// ! Add Length --------------
const addLength = str => str.split(" ").map(word => `${word} ${word.length}`);
