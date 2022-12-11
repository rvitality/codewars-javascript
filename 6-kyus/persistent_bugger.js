// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

// !  Persistent Bugger. ---------------
const persistence = num => {
    if (num / 10 < 1) return 0;

    let ans = num;
    let count = 0;

    while (`${ans}`.length > 1) {
        ans = [...`${ans}`].reduce((product, x) => product * x, 1);
        count++;
    }
    return count;
};
