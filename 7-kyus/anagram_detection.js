// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

// ! Anagram Detection ---------------

const isAnagram = (test, original) => {
    if (test.length !== original.length) return false;

    const testChars = {};
    const originalChars = {};

    for (let i = 0; i < test.length; i++) {
        const char1 = test[i].toLowerCase();
        const char2 = original[i].toLowerCase();

        testChars[char1] = (testChars[char1] || 0) + 1;
        originalChars[char2] = (originalChars[char2] || 0) + 1;
    }

    for (const key in testChars) {
        if (testChars[key] !== originalChars[key]) {
            return false;
        }
    }

    return true;

    // return [...test.toLowerCase()].sort().join("") === [...original.toLowerCase()].sort().join("");
};

console.log(isAnagram("XrqaRDPJlmD", "XRmqJPlDSra"));
