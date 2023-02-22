// https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript

// !  Power ---------------

const numberToPower = (num, power) => {
    let res = 1;

    for (let i = 0; i < power; i++) {
        res *= num;
    }

    return res;
};
