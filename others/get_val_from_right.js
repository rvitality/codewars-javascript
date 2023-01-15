// get value from a number or string without sorting it

const getNum = (num, pos) => {
    const numStr = num.toString();
    return numStr.charAt(numStr.length - pos);
};

// console.log(getNum(523675, 1));
// console.log(getNum(123456, 5));
