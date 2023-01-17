// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

// ! Sum of array singles ---------------
const repeats = arr => {
    const seen = {};

    arr.forEach(el => (seen[el] = (seen[el] || 0) + 1));
    let sum = 0;
    for (const num in seen) {
        if (seen[num] < 2) {
            sum += +num;
        }
    }

    return sum;
};

console.log(repeats([4, 5, 7, 5, 4, 8]));
