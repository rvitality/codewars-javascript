// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

// ! Growth of a Population  ---------------

const nbYear = (initialPopulation, percent, aug, populationTosurpass) => {
    const percentage = percent / 100;
    let years = 0;

    for (years; initialPopulation < populationTosurpass; years++) {
        initialPopulation += Math.floor(initialPopulation * percentage + aug);
    }

    return years;
};
