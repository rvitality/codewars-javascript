// Credits: https://www.udemy.com/course/javascript-interview-questions-coding-interview/

// const fibo = n => {
//     const arr = [0, 1];

//     for (let i = 2; i < n; i++) {
//         let prevPrev = arr[i - 2];
//         let prev = arr[i - 1];

//         let sum = prevPrev + prev;
//         arr.push(sum);
//     }

//     console.log(arr);
// };

const fibo = n => {
    if (n < 2) return 1;

    return fibo(n - 2) + fibo(n - 1);
};
