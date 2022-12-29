// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

// ! Find the unique number ---------------
const findUniq = arr => {
    let res;
    for (let i = 1; i < arr.length; i++) {
        const prev = arr[i - 1];
        const current = arr[i];
        const next = arr[i + 1];

        if (prev !== undefined && next !== undefined) {
            if (prev !== current && current === next) {
                res = prev;
                break;
            } else if (prev !== current && current !== next) {
                res = current;
                break;
            } else if (prev === current && current !== next) {
                res = next;
                break;
            }
        }
    }

    return res;
};

console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 0, 0]));
