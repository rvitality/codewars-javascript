// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript
// ! Over The Road ---------------

const overTheRoad = (address, streetLength) => {
    const diff = streetLength + streetLength + 1;
    return Math.abs(address - diff);
};
