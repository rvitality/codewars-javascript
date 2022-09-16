// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

// ! How good are you really? --------------

const betterThanAverage = (classPoints, yourPoints) => {
    const totalPoints = [...classPoints, yourPoints];
    const average = totalPoints.reduce((sum, point) => sum + point, 0) / totalPoints.length;

    return yourPoints > average;
};
