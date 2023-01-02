// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

// ! Alternate capitalization ---------------

const capitalize = string => {
    let res = ["", ""];

    for (let i = 0; i < string.length; i++) {
        const isEven = i % 2 === 0;
        const char = string[i].toLowerCase();

        if (isEven) {
            res[0] += char.toUpperCase();
            res[1] += char;
        } else {
            res[0] += char;
            res[1] += char.toUpperCase();
        }
    }

    return res;
};
