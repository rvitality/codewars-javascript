function cookie(x) {
    const type = typeof x;

    let res = "Who ate the last cookie? It was ";

    if (type === "string") {
        return res + "Zach!";
    }

    if (type === "number") {
        return res + "Monica!";
    }

    return res + "the dog!";
}
