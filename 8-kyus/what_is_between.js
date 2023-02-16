// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

// ! What is between? ---------------
const between = (a, b) => {
    const res = [];
    for (let i = a; i <= b; i++) {
        res.push(i);
    }

    return res;
};
