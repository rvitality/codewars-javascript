function vowelIndices(word) {
    const res = [];

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const vowels = "AEIOUYaeiouy";

        if (vowels.includes(char)) {
            res.push(i + 1);
        }
    }
    return res;
}
