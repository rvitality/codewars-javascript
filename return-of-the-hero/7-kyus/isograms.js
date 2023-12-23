function isIsogram(str) {
    return [...new Set(str.toUpperCase())].length === str.length;
}
