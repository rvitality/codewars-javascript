// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// ! Exes and Ohs ---------------

const XO = str =>
    [...str].filter(char => char.toLowerCase() === "x").length ===
    [...str].filter(char => char.toLowerCase() === "o").length;
