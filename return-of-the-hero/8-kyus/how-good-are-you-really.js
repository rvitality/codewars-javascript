// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

// ! How good are you really? --------------

const betterThanAverage = (classPoints, yourPoint) => {
    const classAvrg =
        [...classPoints, yourPoint].reduce((sum, point) => sum + point, 0) /
        classPoints.length;

    return yourPoint >= classAvrg;
};
