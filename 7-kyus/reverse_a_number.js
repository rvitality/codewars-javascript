// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

// ! Reverse a Number ---------------

const reverseNumber = n => {
    const reversedNum = parseFloat([...`${Math.abs(n)}`].reverse().join(""));
    return n < 0 ? -reversedNum : reversedNum;
};
