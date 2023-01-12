// https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript

// ! Count consonants ---------------

const consonantCount = str =>
    [...str.toLowerCase()].filter(
        char => char.charCodeAt(0) > 97 && char.charCodeAt(0) <= 122 && !"aeiou".includes(char)
    ).length;
