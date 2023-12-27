function capitalize(word) {
    const res = ["", ""];

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (i % 2 === 0) {
            res[0] += char.toUpperCase();
            res[1] += char.toLowerCase();
        } else {
            res[0] += char.toLowerCase();
            res[1] += char.toUpperCase();
        }
    }

    return res;
}
