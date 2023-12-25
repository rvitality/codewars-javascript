function oddOrEven(array) {
    return array.reduce((sum, num) => sum + num, 0) % 2 === 0 ? "even" : "odd";
}
