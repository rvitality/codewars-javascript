function findLongest(array) {
    let mostDigits = 0;

    array.forEach((num) => {
        const currDigitsLen = num.toString().length;
        if (currDigitsLen > mostDigits.toString().length) {
            mostDigits = num;
        }
    });
    return mostDigits;
}
