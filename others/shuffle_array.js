// ! create a function to shuffle a given array
// the array will only consists valid numbers

const shuffle = arr =>
    arr
        .map(num => ({ sort: Math.random(), num }))
        .sort((a, b) => a.sort - b.sort)
        .map(el => el.num);

const example = [472, 35, 71, 12, 5, 33, 8, 5232, 423];
console.log(shuffle(example));
