function sortMyString(string) {
    let res = ["", ""];

    string.split("").forEach((char, index) => {
        if (index % 2 === 0) {
            res[0] += char;
        } else {
            res[1] += char;
        }
    });

    return res.join(" ");
}
