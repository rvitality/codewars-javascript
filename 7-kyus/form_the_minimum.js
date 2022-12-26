// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

// ! Form The Minimum  ---------------

const minValue = values => +[...new Set(values)].sort((a, b) => a - b).join("");
