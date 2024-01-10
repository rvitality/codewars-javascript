function pipeFix(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    const res = [];

    for (let i = min; i <= max; i++) {
        res.push(i);
    }

    return res;
}
