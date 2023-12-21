// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

// ! Abbreviate a Two Word Name --------------

const abbrevName = (names) =>
    names
        .split(" ")
        .map((name) => name[0])
        .join(".")
        .toUpperCase();
