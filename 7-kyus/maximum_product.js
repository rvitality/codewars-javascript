// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

// ! Maximum Product ---------------

const adjacentElementsProduct = arr => {
    let maxProduct = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < arr.length; i++) {
        const prev = arr[i - 1];
        const curr = arr[i];

        let product = prev * curr;

        if (product > maxProduct) {
            maxProduct = product;
        }
    }

    return maxProduct;
};
