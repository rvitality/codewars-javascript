// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// !  Sum of positive ---------------
const positiveSum = arr => {
    if (!arr) return 0;

    return arr.reduce((sum, num) => {
        if (num > 0) {
            return sum + num;
        }

        return sum;
    }, 0);
};
