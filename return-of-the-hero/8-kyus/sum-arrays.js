// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// ! Sum Arrays --------------

const sum = (numbers) => {
    "use strict";
    return !numbers.length ? 0 : numbers.reduce((sum, num) => sum + num, 0);
};
