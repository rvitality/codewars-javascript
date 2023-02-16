// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

// ! Correct the mistakes of the character recognition software ---------------

const correct = string => {
    const corrections = {
        5: "S",
        0: "O",
        1: "I",
    };

    return [...string].map(char => corrections[char] || char).join("");
};

console.log(correct("L0ND0N"));
