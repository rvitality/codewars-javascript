// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript

// ! Dot Calculator ---------------

const dotCalculator = equation => {
    const [x, operator, y] = equation.split(" ");
    const num1 = x.length;
    const num2 = y.length;

    const calc = {
        "+": num1 + num2,
        "-": num1 - num2,
        "*": num1 * num2,
        "//": num1 / num2,
    };

    const ans = calc[operator];

    return ".".repeat(ans);
};

dotCalculator("..... + ...............");
