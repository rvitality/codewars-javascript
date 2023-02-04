// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

// ! Sum of integers in string ---------------

const sumOfIntegersInString = str => {
    const digits = "0123456789";

    let sum = 0;
    let num = "";

    for (let i = 0; i < str.length; i++) {
        const curr = str[i];

        if (digits.includes(curr)) {
            num += curr;
        } else {
            sum += +num;
            num = "";
        }
    }

    if (num !== "") {
        sum += +num;
    }

    return sum;
};

console.log(sumOfIntegersInString("12.4"));
