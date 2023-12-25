function reverseWords(str) {
    return str
        .split(" ")
        .map((s) => [...s].reverse().join(""))
        .join(" ");
}
