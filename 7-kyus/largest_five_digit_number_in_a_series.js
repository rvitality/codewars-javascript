// https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript

// ! Largest 5 digit number in a series ---------------

const solution = digits => {
    let biggestNum = 0;
    for (let i = 0; i <= digits.length - 5; i++) {
        const nextNum = digits.slice(i, i + 5);

        if (+nextNum > biggestNum) {
            biggestNum = nextNum;
        }
    }

    return +biggestNum;
};
