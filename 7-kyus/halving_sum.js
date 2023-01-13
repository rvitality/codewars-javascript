// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

// ! Halving Sum ---------------

const halvingSum = n => {
    if (n === 1) return 1;
    return n + halvingSum(Math.floor(n / 2));
};
