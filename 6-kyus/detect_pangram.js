// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// !  Detect Pangram  ---------------
const isPangram = string =>
    [..."abcdefghijklmnopqrstuvwxyz"].every(letter => string.toLowerCase().includes(letter));

console.log(isPangram("The quick brown fox jumps over the lazy dog. "));
