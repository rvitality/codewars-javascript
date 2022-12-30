// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// ! Highest Scoring Word ---------------
const high = str => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const words = str.split(" ");
    let max = 0;
    let highestWord = words[0];

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i].split("");

        let currentSum = 0;
        for (let i = 0; i < currentWord.length; i++) {
            currentSum += alphabet.indexOf(currentWord[i]) + 1;
        }

        if (currentSum > max) {
            max = currentSum;
            highestWord = currentWord.join("");
        }
    }

    return highestWord;
};
