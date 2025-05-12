function findAverage(array) {
    return array.length === 0 ? 0 : array.reduce((sum, num) => sum + num, 0) / array.length;
}
