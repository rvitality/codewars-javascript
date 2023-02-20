// https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

// ! simple calculator ---------------

const calculator = (a, b, sign) => {
    const rules = {
        "+": a + b,
        "-": a - b,
        "*": a * b,
        "/": a / b,
    };

    const res = rules[sign];

    return isNaN(res) ? "unknown value" : res;
};
