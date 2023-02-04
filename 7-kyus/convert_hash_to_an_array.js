// https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript

// ! Convert Hash To An Array ---------------

const convertHashToArray = hash => {
    const sortedData = Object.keys(hash)
        .sort()
        .reduce((acc, key) => {
            acc[key] = hash[key];
            return acc;
        }, {});

    return Object.entries(sortedData);
};

// console.log(convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" }));
