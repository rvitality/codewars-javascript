// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// ! Highest and Lowest --------------

const highAndLow = (numbers) => {
    const nums = numbers.split(" ");
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
};
