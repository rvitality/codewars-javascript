// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

// ! Lost number in number sequence ---------------

const findDeletedNumber = (arr, mixArr) => {
    const totalArr = arr.reduce((sum, num) => sum + num, 0);
    const totalMixArr = mixArr.reduce((sum, num) => sum + num, 0);
    return totalArr - totalMixArr;
};
