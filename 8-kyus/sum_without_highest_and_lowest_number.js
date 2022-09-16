// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// ! Sum without highest and lowest number ---------------
const sumArray = arr => {
    if (!Array.isArray(arr) || arr.length === 0 || !arr || arr.length === 1) return 0;
    console.log(arr);

    const highest = Math.max(...arr);
    const lowest = Math.min(...arr);
    console.log(highest, lowest);
    return arr.reduce((sum, num) => sum + num, 0) - highest - lowest;
};
