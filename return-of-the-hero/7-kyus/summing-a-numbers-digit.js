function sumDigits(number) {
    return Math.abs(number)
        .toString()
        .split("")
        .reduce((sum, num) => sum + parseInt(num), 0);
}
