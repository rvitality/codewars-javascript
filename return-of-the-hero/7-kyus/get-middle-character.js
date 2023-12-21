// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

// ! Get the Middle Character --------------

const getMiddle = (s) => {
    const mid = Math.floor(s.length / 2);
    return s.length % 2 !== 0 ? s[mid] : `${s[mid - 1]}${s[mid]}`;
};
