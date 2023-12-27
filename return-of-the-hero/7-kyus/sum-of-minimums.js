function sumOfMinimums(numbers) {
    return numbers.reduce(
        (sum, insideNums) => sum + Math.min(...insideNums),
        0
    );
}
