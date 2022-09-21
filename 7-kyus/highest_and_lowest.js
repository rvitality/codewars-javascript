// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

/*

    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

*/

// ! Square Every Digit  ---------------
const highAndLow = strNumbers => {
    // const intNumbers = strNumbers.split(" ").map(num => +num);
    const intNumbers = strNumbers.split(" ").map(Number);
    return `${Math.max(...intNumbers)} ${Math.min(...intNumbers)}`;
};
