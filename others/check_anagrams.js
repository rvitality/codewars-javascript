// Credits: https://www.udemy.com/course/javascript-interview-questions-coding-interview/

const checkAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    if (str1 === str2) return true;

    const str1Chars = {};
    const str2Chars = {};

    for (let i = 0; i < [...str1].length; i++) {
        const char1 = str1[i];
        const char2 = str2[i];

        if (char1 !== " ") {
            str1Chars[char1] = (str1Chars[char1] || 0) + 1;
        }

        if (char2 !== " ") {
            str2Chars[char2] = (str2Chars[char2] || 0) + 1;
        }
    }

    console.log(str1Chars);
    console.log(str2Chars);

    for (key in str1Chars) {
        if (str1Chars[key] !== str2Chars[key]) {
            return false;
        }
    }

    return true;
};

// console.log(checkAnagrams("the eyes", "they see"));
// console.log(checkAnagrams("dormitory", "dirty room"));
