// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

// ! Sum of Multiples ---------------

const sumMul = (n, m) => {
    if (n >= m) return "INVALID";

    let sum = 0;

    for (let i = n; i < m; i += n) {
        sum += i;
    }

    return sum;
};
