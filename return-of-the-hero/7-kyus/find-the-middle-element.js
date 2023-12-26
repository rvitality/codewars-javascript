function gimme(triplet) {
    const sortedNumbers = [...triplet].sort((a, b) => a - b);
    return triplet.indexOf(sortedNumbers[1]);
}
