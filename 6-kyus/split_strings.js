// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// !  Split Strings ---------------
const solution = str => {
    const letters = [...str];
    const res = [];

    if (letters.length % 2 !== 0) {
        letters.push("_");
    }

    for (let i = 0; i < letters.length; i += 2) {
        res.push(letters.slice(i, i + 2).join(""));
    }

    return res;
};
console.log(solution("abcdefgh"));
console.log(solution("abc"));
