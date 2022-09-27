// https://www.codewars.com/kata/579ba41ce298a73aaa000255/train/javascript

// ! Remove the minimum ---------------

const nameThatNumber = number => {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return units[number];
    }

    const num1 = Math.floor(number / 10);
    const num2 = Math.floor(number % 10);

    return num2 === 0 ? tens[num1] : `${tens[num1]} ${units[num2]}`;
};
