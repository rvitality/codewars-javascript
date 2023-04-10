// https://www.codewars.com/kata/5966f6343c0702d1dc00004c/train/javascript

// ! You Got Change? ---------------

const giveChange = amount => {
    const arr = [100, 50, 20, 10, 5, 1];
    const res = [];

    let total = amount; // 217
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        const quotient = Math.floor(total / num);

        if (quotient > 0) {
            const modRes = total % num;

            if (!res[i]) {
                res.push(quotient);
            } else {
                res[i] = res[i] + quotient;
            }

            total = modRes;
        } else {
            res.push(0);
        }
    }

    return res.reverse();
};

console.log(giveChange(365));
console.log(giveChange(217));
console.log(giveChange(8));
