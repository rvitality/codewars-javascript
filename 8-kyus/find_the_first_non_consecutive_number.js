// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

// ! Find the first non-consecutive number ---------------
// if (!arr && arr.length === 1) return null;

const firstNonConsecutive = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];

        if (Math.abs(nextNum - currentNum) !== 1) return nextNum;
    }

    return null;
};

// const firstNonConsecutive = arr => {
//     let res = arr.find((val, index) => val !== index + arr[0]);
//     return Number.isInteger(res) ? res : null;
// };
