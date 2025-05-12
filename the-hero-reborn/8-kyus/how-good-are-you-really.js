function betterThanAverage(classPoints, yourPoints) {
    const avrg = classPoints.reduce((sum, num) => sum + num, 0) / classPoints.length;

    return yourPoints > avrg;
}
