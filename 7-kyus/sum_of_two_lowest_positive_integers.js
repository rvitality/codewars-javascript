// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// ! Sum of two lowest positive integers ---------------

// const sumTwoSmallestNumbers = numbers => {
//     const sortedNumbersAsc = numbers.sort((a, b) => a - b);
//     return sortedNumbersAsc[0] + sortedNumbersAsc[1];
// };

const sumTwoSmallestNumbers = numbers => {
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];

        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    return min1 + min2;
};
