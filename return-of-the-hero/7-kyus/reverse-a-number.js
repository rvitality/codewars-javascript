function reverseNumber(n) {
    const reversed = parseInt(
        Math.abs(n).toString().split("").reverse().join("")
    );
    return n > 0 ? reversed : -reversed;
}
