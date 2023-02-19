// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

// ! No zeros for heros ---------------

const noBoringZeros = n => {
    if (!n) return n;
    let lastDigit = n % 10;

    while (lastDigit === 0) {
        n /= 10;
        lastDigit = n % 10;
    }
    return n;
};

console.log(noBoringZeros(1050));
