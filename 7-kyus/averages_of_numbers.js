// https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript

// ! averages ---------------

const averages = numbers => {
    if (!numbers || numbers.length < 2) return [];
    const avrg = [];
    for (let i = 1; i < numbers.length; i++) {
        const prev = numbers[i - 1];
        const curr = numbers[i];
        avrg.push((prev + curr) / 2);
    }
    return avrg;
};
