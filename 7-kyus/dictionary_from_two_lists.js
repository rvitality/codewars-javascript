// https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript

// ! Dictionary from two lists ---------------

const createDict = (keys, values) => {
    return keys.reduce((acc, key, index) => {
        acc[key] = values[index] === undefined ? null : values[index];
        return acc;
    }, {});
};

console.log(createDict(["a", "b", "c", "d"], [1, 2, 3, 4, 5, 6]));
