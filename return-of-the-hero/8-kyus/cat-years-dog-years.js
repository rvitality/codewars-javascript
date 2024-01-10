const humanYearsCatYearsDogYears = (humanYears) => {
    // Your code here!

    let catYears = 15;
    let dogYears = 15;

    if (humanYears === 2) {
        catYears += 9;
        dogYears += 9;
    } else if (humanYears >= 3) {
        catYears += 9;
        dogYears += 9;

        const catDiff = (humanYears - 2) * 4;
        const dogDiff = (humanYears - 2) * 5;

        catYears += catDiff;
        dogYears += dogDiff;
    }

    return [humanYears, catYears, dogYears];
};
