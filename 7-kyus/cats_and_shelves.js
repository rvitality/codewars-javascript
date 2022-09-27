// https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript

// ! Solution ---------------

const solution = (start, finish) => {
    let pos = start;
    let totalJumps = 0;
    for (let i = start; i <= finish; i++) {
        const jumpHeight = pos + 3 <= finish ? 3 : 1;

        if (pos >= finish) {
            break;
        }

        pos += jumpHeight;
        totalJumps++;
    }

    return totalJumps;
};
