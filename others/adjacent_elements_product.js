function solution(inputArray) {
    let max = -Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < inputArray.length; i++) {
        const prev = inputArray[i - 1];
        const curr = inputArray[i];
        const product = prev * curr;

        if (product > max) {
            max = product;
        }
    }

    return max;
}
