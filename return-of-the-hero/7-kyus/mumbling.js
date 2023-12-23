function accum(str) {
    return [...str]
        .map((s, i) => {
            const letters = s.repeat(i + 1);
            return letters[0].toUpperCase() + letters.slice(1).toLowerCase();
        })
        .join("-");
}
