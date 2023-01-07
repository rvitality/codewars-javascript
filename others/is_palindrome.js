// Credits: https://www.udemy.com/course/javascript-interview-questions-coding-interview/

const isPalindrome = word => {
    return word === [...word].reverse().join("");
};
