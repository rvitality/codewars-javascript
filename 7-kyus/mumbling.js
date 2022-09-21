// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

/*
    Examples:

    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

// ! Mumbling  ---------------
// const accum = letters =>
//     [...letters]
//         .reduce(
//             (acc, letter, index) =>
//                 acc +
//                 "-" +
//                 letter[0].toUpperCase() +
//                 letter.repeat(index + 1).slice(1).toLowerCase(),
//             ""
//         )
//         .slice(1);

const accum = letters =>
    [...letters]
        .map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index))
        .join("-");
