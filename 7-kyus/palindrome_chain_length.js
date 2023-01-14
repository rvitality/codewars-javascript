// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript

// ! Palindrome chain length ---------------

const palindromeChainLength = n => {
    let numStr = n;
    let steps = 0;

    while (true) {
        numStr = numStr.toString();
        const reversedNumStr = [...numStr].reverse().join("");

        if (reversedNumStr === numStr) {
            break;
        }

        numStr = +numStr + +reversedNumStr;
        steps++;
    }

    return steps;
};

console.log(palindromeChainLength(87));
