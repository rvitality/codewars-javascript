//  https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

// ! Replace With Alphabet Position ---------------
const alphabetPosition = text => {
    const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    return [...text.toLowerCase()]
        .map(char => alphabet.indexOf(char) + 1)
        .filter(num => num > 0)
        .join(" ");
};
