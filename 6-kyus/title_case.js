// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

// ! Title Case ---------------
const titleCase = (title, minorWords) => {
    const minorWordsLower = minorWords ? minorWords.toLowerCase().split(" ") : [];
    const words = title.toLowerCase().split(" ");

    return words
        .map((word, index) => {
            if (!word) return word;
            if (minorWordsLower.includes(word) && index !== 0) return word;
            return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
};

console.log(titleCase("the quick brown fox", ""));
