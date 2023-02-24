// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

// ! Predict your age! ---------------

const digits = num => `${num}`.length;

function predictAge(...args) {
    const sum = args.map(num => num ** 2).reduce((sum, num) => sum + num, 0);
    return Math.floor(Math.sqrt(sum) / 2);
}
