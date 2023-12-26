function removeDuplicateWords(s) {
    return [...new Set(s.split(" "))].join(" ");
}
