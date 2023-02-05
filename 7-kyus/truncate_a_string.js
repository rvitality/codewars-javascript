// https://www.codewars.com/kata/57af26297f75b57d1f000225/train/javascript

// ! Truncate a string! ---------------
const truncateString = (str, num) => {
    if (str.length <= num) return str;
    if (num <= 3) return str.slice(0, num) + "...";

    if (str.length > num) {
        return str.slice(0, num).slice(0, -3) + "...";
    }

    return str;
};

// console.log(truncateString("chingel", 8));
console.log(truncateString("chingel", 6));
// console.log(truncateString("chingel", 2));
