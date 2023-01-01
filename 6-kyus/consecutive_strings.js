// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

// ! Consecutive strings ---------------
const longestConsec = (strarr, k) => {
    if (k < 1 || k > strarr.length) return "";

    let longestWord = "";
    for (let i = 0; i < strarr.length; i++) {
        const currentWord = strarr.slice(i, i + k).join("");

        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }

    return longestWord;
};
