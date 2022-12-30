// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

// ! Are they the "same"? ---------------
const comp = (arr1, arr2) => {
    if (!arr1 || !arr2) return false;

    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);

    for (let i = 0; i < arr1.length; i++) {
        const squaredNum = arr1[i] ** 2;

        if (arr2[i] !== squaredNum) {
            return false;
        }
    }

    return true;
};
