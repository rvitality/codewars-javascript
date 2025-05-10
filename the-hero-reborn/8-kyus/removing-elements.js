function removeEveryOther(arr) {
    return arr.filter(function (_, index) {
        return index % 2 === 0;
    });
}
