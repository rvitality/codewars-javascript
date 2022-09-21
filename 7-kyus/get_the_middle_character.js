// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

// ! Get the Middle Character  ---------------

const getMiddle = string => {
    const length = string.length;
    const mid = length / 2;

    if (length % 2 === 0) {
        return string.slice(mid - 1, mid + 1);
    }

    return string[Math.floor(mid)];
};
