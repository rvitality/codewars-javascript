var filterString = function (value) {
    return parseInt(
        value
            .split("")
            .filter((char) => Number.isInteger(parseInt(char)))
            .join("")
    );
};
