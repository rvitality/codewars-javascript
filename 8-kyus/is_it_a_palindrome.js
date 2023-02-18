// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

// ! Is it a palindrome? ---------------

const isPalindrome = str => str.toLowerCase() === [...str].reverse().join("").toLowerCase();
