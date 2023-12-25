// return masked string
function maskify(cc) {
    return "#".repeat(cc.slice(0, -4).length) + cc.slice(-4);
}
