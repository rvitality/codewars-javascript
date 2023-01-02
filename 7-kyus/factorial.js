// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

// ! Factorial ---------------

// const factorial = n => {
//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }

//     return res;
// };

const factorial = n => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};
