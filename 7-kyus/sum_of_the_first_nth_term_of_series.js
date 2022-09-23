// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

// ! Sum of the first nth term of Series  ---------------

const SeriesSum = n => {
    if (n === 0) return "0.00";

    let sum = 1;
    let counter = 4;

    for (let i = 1; i < n; i++) {
        sum += 1 / counter;
        counter += 3;
    }

    return sum.toFixed(2);
};
