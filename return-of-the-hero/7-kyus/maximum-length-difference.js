const mxdiflg = (arr1, arr2) => {
    if (arr1.length === 0 || arr2.length === 0) return -1;

    const arr1Lengths = arr1.map((el) => el.length);
    const arr2Lengths = arr2.map((el) => el.length);

    const max1 = Math.max(...arr1Lengths);
    const min1 = Math.min(...arr1Lengths);

    const max2 = Math.max(...arr2Lengths);
    const min2 = Math.min(...arr2Lengths);

    const diff1 = max1 - min2;
    const diff2 = max2 - min1;

    return Math.max(diff1, diff2);
};
