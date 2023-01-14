// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

// ! Ordered Count of Characters ---------------

const orderedCount = str => {
    const uniqueValues = [...new Set(str)];
    return uniqueValues.map(letter => [letter, str.split(letter).length - 1]);

    // const counts = new Map();

    // for (const char of str) {
    //     const current = counts.get(char) || 0;
    //     counts.set(char, current + 1);
    // }

    // return Array.from(counts, ([key, value]) => [key, value]);
};

console.log(orderedCount("52134131312"));
