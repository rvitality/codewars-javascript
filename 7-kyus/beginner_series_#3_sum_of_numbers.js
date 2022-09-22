// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// ! Beginner Series #3 Sum of Numbers  ---------------
const getSum = (a, b) => {
    if (a === b) return a;

    let first = a,
        last = b;

    if (a > b) {
        last = a;
        first = b;
    }

    let sum = 0;
    for (let i = first; i <= last; i++) {
        sum += i;
    }

    return sum;
};

// from the top answer
// using  Gauss summation

// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return ((max - min + 1) * (min + max)) / 2;
//     return (Math.abs(a - b) + 1) * (a + b) / 2
// };
