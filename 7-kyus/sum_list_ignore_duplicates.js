// https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript

// ! Sum a list but ignore any duplicates ---------------

const sumNoDuplicates = numList =>
    numList
        .filter(
            (num, index, arr) => arr.indexOf(num) === index && !arr.slice(index + 1).includes(num)
        )
        .reduce((sum, num) => sum + num, 0);
