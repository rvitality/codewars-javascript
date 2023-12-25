function getSum(a, b) {
    if (a === b) return a;

    const lowest = Math.min(a, b);
    const highest = Math.max(a, b);

    let sum = 0;

    for (let i = lowest; i <= highest; i++) {
        sum += i;
    }

    return sum;
}
