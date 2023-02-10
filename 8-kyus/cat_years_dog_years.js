// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

// ! Cat years, Dog years ---------------

const humanYearsCatYearsDogYears = humanYears => {
    let catYears = 0;
    let dogYears = 0;

    if (humanYears === 1) {
        catYears += 15;
        dogYears += 15;
    } else if (humanYears === 2) {
        catYears += 24;
        dogYears += 24;
    } else {
        catYears += 24;
        dogYears += 24;

        const newHumanYears = humanYears >= 2 ? humanYears - 2 : humanYears;

        catYears = catYears + 4 * newHumanYears;
        dogYears = dogYears + 5 * newHumanYears;
    }

    return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(3));
