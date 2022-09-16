// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// ! Count of positives / sum of negatives --------------
const countPositivesSumNegatives = arr => {
    if (!arr || arr === null) return [];

    let countPositive = 0;
    let sumNegative = 0;

    arr.forEach(num => {
        if (num > 0) {
            countPositive++;
        } else {
            sumNegative += num;
        }
    });

    // issue
    if (countPositive === 0 && sumNegative === 0) return [];

    return [countPositive, sumNegative];
};

// const countPositivesSumNegatives = arr => {
//     if (!Array.isArray(arr) || !arr.length ) return [];

//     return arr.reduce(
//         (acc, num) => {
//             if (num > 0) acc[0] += 1;
//             if (num < 0) acc[1] += num;

//             return acc;
//         },
//         [0, 0]
//     );
// };
