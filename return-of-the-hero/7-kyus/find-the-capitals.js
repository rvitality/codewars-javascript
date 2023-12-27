const capitals = function (word) {
    const res = [];

    for (let i = 0; i < word.length; i++) {
        const charCode = word[i].charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
            res.push(i);
        }
    }

    return res;
};
