// Credits: https://www.udemy.com/course/javascript-interview-questions-coding-interview/

const titleCase = str =>
    str
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

// console.log(titleCase("I am a little tea pot"));
// console.log(titleCase("the Quick BROQNMS Fxosd"));
