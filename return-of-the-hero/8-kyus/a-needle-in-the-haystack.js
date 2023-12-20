// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

// ! A Needle in the Haystack --------------

const findNeedle = (haystack) => {
    const needleIndex = haystack.findIndex((el) => el === "needle");
    return `found the needle at position ${needleIndex}`;
};
