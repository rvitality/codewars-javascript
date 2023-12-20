// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// ! Disemvowel Trolls --------------

const disemvowel = (str) => {
    const vowels = "aeiouAEIOU";

    return str
        .split("")
        .filter((letter) => !vowels.includes(letter))
        .join("");
};
