function adjacentElementsProduct(array) {
    let max = -Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < array.length - 1; i++) {
        const x = array[i];
        const y = array[i + 1];

        const currentProduct = x * y;

        if (currentProduct > max) {
            max = currentProduct;
        }
    }

    return max;
}
