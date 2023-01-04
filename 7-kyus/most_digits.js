// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

// ! Most digits ---------------

const findLongest = arr => {
    let highest = "0";

    for (let i = 0; i < arr.length; i++) {
        const current = `${arr[i]}`;

        if (current.length > highest.length) {
            highest = current;
        }
    }

    return +highest;
};
