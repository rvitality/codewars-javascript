// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// ! Shortest Word ---------------
// const findShort = str => {
//     const words = str.split(" ");
//     let shortest = words[0];

//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length < shortest.length) {
//             shortest = words[i];
//         }
//     }

//     return shortest.length;
// };

const findShort = str => Math.min(...str.split(" ").map(char => char.length));
