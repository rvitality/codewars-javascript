// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

// Note: The function accepts an integer and returns an integer

// ! Square Every Digit  ---------------
const squareDigits = num =>
    parseInt([...`${num}`].reduce((sum, num) => sum + `${parseInt(num) ** 2}`, ""));
