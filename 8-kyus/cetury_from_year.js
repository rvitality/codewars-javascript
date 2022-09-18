// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

// ! Century From Year ---------------
const century = year => {
    // using ceiling method to round up to nearest century (100)
    // return Math.ceil(year/100);

    const initial = year / 100;
    const compareTo = year % 100;

    if (compareTo >= 1 && compareTo <= 100) {
        return Math.floor(initial + 1);
    }

    return Math.floor(initial);
};
