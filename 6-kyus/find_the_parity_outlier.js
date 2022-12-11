// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

// !  Find The Parity Outlier ---------------
// const findOutlier = numbers => {
//     const isEven =
//         numbers
//             .slice(0, 3)
//             .map(num => Math.abs(num) % 2)
//             .filter(el => el === 0).length >= 2;

//     return numbers.find(num => (isEven ? Math.abs(num) % 2 === 1 : Math.abs(num) % 2 === 0));
// };

const findOutlier = numbers => {
    const even = numbers.filter(num => num % 2 === 0);
    const odd = numbers.filter(num => num % 2 !== 0);

    return even.length === 1 ? even[0] : odd[0];
};
