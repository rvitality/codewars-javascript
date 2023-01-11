// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

// ! Largest pair sum in array ---------------

const largestPairSum = numbers => {
    const sortedNumbersDesc = numbers.sort((a, b) => b - a);
    return sortedNumbersDesc[0] + sortedNumbersDesc[1];
};
