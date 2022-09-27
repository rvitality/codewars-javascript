// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

// ! Count the divisors of a number ---------------

const getDivisorsCnt = num => {
    let count = 1;

    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    return count;
};
