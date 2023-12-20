// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// ! Vowel Count --------------

const getCount = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];

    return [...str].reduce(
        (sum, letter) => sum + (vowels.includes(letter) ? 1 : 0),
        0
    );
};
