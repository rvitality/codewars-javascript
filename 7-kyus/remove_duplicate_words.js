// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

// ! Remove duplicate words ---------------

const removeDuplicateWords = words => [...new Set(words.split(" "))].join(" ");
