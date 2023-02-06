// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

// ! Sum of Cubes ---------------

const sumCubes = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        const cubed = n ** 3;
        sum += cubed;
    }

    return sum;
};
