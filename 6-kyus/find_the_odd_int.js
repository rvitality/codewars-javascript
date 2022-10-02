// https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript

// ! Find the odd int ---------------
const findOdd = numbers => {
    const numbersObj = {};
    let res;

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];

        if (numbersObj.hasOwnProperty(num)) {
            numbersObj[num] += 1;
        } else {
            numbersObj[num] = 1;
        }
    }

    for (const key in numbersObj) {
        const value = numbersObj[key];
        if (value % 2 === 1) {
            return +key;
        }
    }

    return +res;
};

// Top answer from codewars:
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
