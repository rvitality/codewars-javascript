function findNeedle(haystack) {
    const needleIndex = haystack.findIndex((el) => el === "needle");
    return `found the needle at position ${needleIndex}`;
}
