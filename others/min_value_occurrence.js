// find min value of a given arr and count its num of occurences

const countMinOccurences = arr => {
    if (!arr || !arr.length) return 0;
    const minValue = Math.min(...arr);
    return arr.reduce((sum, num) => (num === minValue ? sum + 1 : sum), 0);
};
console.log(countMinOccurences([1, 2, 3, 4, 5, 6, 1, 1, 1])); // 4
