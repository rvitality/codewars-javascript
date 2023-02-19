// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript

// ! Generate range of integers ---------------

const generateRange = (min, max, step) => {
    const res = [];
    for (let i = min; i <= max; i += step) {
        res.push(i);
    }
    return res;
};
