// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

// ! Sum of odd numbers  ---------------

const rowSumOddNumbers = n => {
    let firstNum = n * (n - 1) + 1;
    let sum = firstNum;

    // i = 1, because we already have the first value `firstNum`
    for (let i = 1; i < n; i++) {
        firstNum += 2;
        sum += firstNum;
    }

    return sum;
};

// of course, the "legends" from codewars have a one-liner solution
// const rowSumOddNumbers = n => Math.pow(n, 3);
