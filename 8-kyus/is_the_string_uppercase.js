// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

// ! Find the first non-consecutive number ---------------

String.prototype.isUpperCase = function () {
    const word = `${this}`;
    return word.toUpperCase() === word;
};

console.log("hello I AM DONALD".isUpperCase());
console.log("HI".isUpperCase());
