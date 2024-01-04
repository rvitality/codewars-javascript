function numberToPower(number, power) {
    if (power === 0) {
        return 1;
    }

    return power === 1 ? number : number * numberToPower(number, power - 1);
}

numberToPower(4, 2);
