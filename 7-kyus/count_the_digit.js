// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

// ! Count the Digit ---------------

const nbDig = (n, d) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        const k = i ** 2;

        const length = [...`${k}`].filter(num => num === `${d}`).length;
        sum += length;
    }
    return sum;
};
