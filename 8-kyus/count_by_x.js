// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

// ! Count by X ---------------

const countBy = (x, n) =>
    Array(n)
        .fill(1)
        .map((num, index) => index + 1 * x);
