// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// !  Unique In Order ---------------
const uniqueInOrder = iterable => {
    // if (typeof iterable === "string") {
    //     iterable = [...iterable];
    // }

    // const res = [];

    // for (let i = 0; i < iterable.length; i++) {
    //     const prev = iterable[i - 1];
    //     const curr = iterable[i];
    //     if (prev !== curr) {
    //         res.push(curr);
    //     }
    // }

    // return res;

    return [...iterable].filter((el, index, arr) => el !== arr[index - 1]);
};
