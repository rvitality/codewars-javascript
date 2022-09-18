// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

// ! Remove duplicates from list ---------------
// const distinct = arr => [...new Set(arr)];

const distinct = arr => {
    const seenValues = {};

    return arr.filter((num, index, a) => {
        if (!seenValues.hasOwnProperty(num)) {
            // return (seenValues[num] = num);

            // console.log((seenValues[num] = true));
            // return (seenValues[num] = true);

            seenValues[num] = true;
            console.log(seenValues[num]);
            return seenValues[num];
        }

        return false;
    });
};

console.log(distinct([1, 1, 2]));
// console.log(distinct([5, 3, 4, 2, 6, 7, 1, 2, 3, 2, 5, 6]));

// const distinct = arr =>
//     arr.reduce((acc, el) => {
//         if (acc.indexOf(el) < 0) {
//             acc.push(el);
//         }

//         return acc;
//     }, []);

// const distinct = arr => arr.reduce((acc, el) => (acc.indexOf(el) < 0 ? [...acc, el] : acc), []);

const hello = () => {
    let y = 15;

    return (y += 5);
};

console.log(hello());
