// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

// ! Short Long Short ---------------

const solution = (a, b) => {
    let long = a.length > b.length ? a : b;
    let short = a.length < b.length ? a : b;

    return `${short}${long}${short}`;
};
