// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

// ! Square Every Digit --------------

const squareDigits = (num) => {
    const digits = `${num}`.split("");
    const squaredDigits = digits.map((digit) => parseFloat(digit) ** 2);

    return +squaredDigits.join("");
};
