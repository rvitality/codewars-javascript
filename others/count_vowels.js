// Credits: https://www.udemy.com/course/javascript-interview-questions-coding-interview/

const countVowels = str =>
    [...str].reduce((sum, vowel) => ("aeiou".includes(vowel.toLowerCase()) ? sum + 1 : sum), 0);

// console.log(countVowels("the quick brown"));
// console.log(countVowels("aeiouaeqzxcweioweqqweu"));
