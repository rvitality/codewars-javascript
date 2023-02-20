// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

// ! Sum of differences in array ---------------

const sumOfDifferences = arr => {
    const descArr = [...arr].sort((a, b) => b - a);
    let sum = 0;

    for (let i = 0; i < descArr.length - 1; i++) {
        const current = descArr[i];
        const next = descArr[i + 1];

        sum += current - next;
    }

    return sum;
};

console.log(sumOfDifferences([2, 1, 10]));
