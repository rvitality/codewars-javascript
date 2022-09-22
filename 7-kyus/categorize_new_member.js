// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

// ! Friend or Foe?  ---------------

// const openOrSenior = data => {
//     const output = [];

//     for (let i = 0; i < data.length; i++) {
//         const [age, handicap] = data[i];

//         let category = "Open";
//         if (age >= 55 && handicap > 7) {
//             category = "Senior";
//         }

//         output.push(category);
//     }
//     return output;
// };

const openOrSenior = data =>
    data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? "Senior" : "Open"));
