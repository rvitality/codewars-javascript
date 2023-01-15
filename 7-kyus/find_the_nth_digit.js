// https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript

// ! Find the nth Digit of a Number ---------------

const findDigit = (num, nth) => {
    if (nth <= 0) return -1;

    let numStr = num.toString().replace("-", "");

    let find = numStr.charAt(numStr.length - nth) * 1;
    return find;
};

console.log("ans: ", findDigit(12369, 2));
