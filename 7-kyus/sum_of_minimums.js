// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

// ! Sum of Minimums! ---------------
const sumOfMinimums = arr => arr.reduce((sum, insideArr) => sum + Math.min(...insideArr), 0);
