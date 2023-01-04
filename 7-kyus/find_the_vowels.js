// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

// ! Find the vowels ---------------

const vowelIndices = word =>
    [...word]
        .map((char, index) => ("aeiouy".includes(char.toLowerCase()) ? index + 1 : null))
        .filter(Boolean);
