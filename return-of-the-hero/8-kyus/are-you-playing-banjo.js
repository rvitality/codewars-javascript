// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

// ! Are You Playing Banjo? --------------

const areYouPlayingBanjo = (name) =>
    name[0]?.toUpperCase() === "R"
        ? `${name} plays banjo`
        : `${name} does not play banjo`;
