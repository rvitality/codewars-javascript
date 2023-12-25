function sumTwoSmallestNumbers(numbers) {
    const sortedNums = numbers.sort((a, b) => a - b);
    return sortedNums[0] + sortedNums[1];
}
