// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// ! Descending Order --------------

const descendingOrder = (n) => {
    return parseInt(String(n).split("").sort().reverse().join(""));
};
