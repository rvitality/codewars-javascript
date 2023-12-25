String.prototype.toJadenCase = function () {
    const words = this;

    return words
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
};
