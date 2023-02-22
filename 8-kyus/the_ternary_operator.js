// https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript

// !  Be Concise I - The Ternary Operator ---------------

const describeAge = age =>
    `You're a(n) ${
        age <= 12
            ? "kid"
            : age >= 13 && age <= 17
            ? "teenager"
            : age >= 18 && age <= 64
            ? "adult"
            : "elderly"
    }`;
