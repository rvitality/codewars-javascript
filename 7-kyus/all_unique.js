// https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript

// ! All unique ---------------

const hasUniqueChars = str => str.length === [...new Set(str)].length;

console.log(hasUniqueChars("abcedf"));
