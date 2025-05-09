function basicOp(operation, value1, value2) {
    const performOperation = {
        "+": value1 + value2,
        "-": value1 - value2,
        "*": value1 * value2,
        "/": value1 / value2,
    };

    return performOperation[operation];
}
