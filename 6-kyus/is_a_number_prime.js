// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

// ! Is a number prime? ---------------
const isPrime = num => {
    const sqrtRoot = Math.sqrt(num);

    for (let i = 2; i <= sqrtRoot; i++) {
        if (num % i === 0) return false;
    }

    return num > 1;
};
