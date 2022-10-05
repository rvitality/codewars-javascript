// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

// ! Make a function that does arithmetic! ---------------

const arithmetic = (num1, num2, operator) => {
    const operation = {
        add: num1 + num2,
        subtract: num1 - num2,
        multiply: num1 * num2,
        divide: num1 / num2,
    };

    return operation[operator];
};
