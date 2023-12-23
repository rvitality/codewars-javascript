function XO(str) {
    const strArr = [...str.toLowerCase()];
    const exes = strArr.filter((s) => s === "x");
    const ohs = strArr.filter((s) => s === "o");

    return exes.length === ohs.length;
}
