// ! Create a function to get the number of digits in a given number

const getNumDigitsLength = num => Math.ceil(Math.log10(num + 1));
// + 1 because if the arg is 1, it will return 0
// log -> a quantity representing the power to which a fixed number (the base) must be raised to produce a given number.

// const getNumDigitsLength = num => {
//     let count = 0;
//     while (num >= 1) {
//         num /= 10;
//         count++;
//     }

//     return count;
// };

console.log(getNumDigitsLength(12345)); // 5
console.log(getNumDigitsLength(Number.MAX_SAFE_INTEGER)); // 16
