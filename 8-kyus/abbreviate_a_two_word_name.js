// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

// ! Abbreviate a Two Word Name ---------------
const abbrevName = name => {
    const splitName = name.split(" ");
    return `${splitName[0][0].toUpperCase()}.${splitName[1][0].toUpperCase()}`;
};
