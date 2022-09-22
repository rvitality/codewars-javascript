// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// ! Jaden Casing String ---------------
String.prototype.toJadenCase = function () {
    const words = this;

    return words
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
};
