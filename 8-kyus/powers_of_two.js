// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

// ! Powers of 2 ---------------

const powersOfTwo = n => {
    const res = [];

    for (let i = 0; i <= n; i++) {
        res.push(2 ** i);
    }

    return res;
};
