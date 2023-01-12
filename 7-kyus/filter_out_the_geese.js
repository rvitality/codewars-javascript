// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

// ! Filter out the geese ---------------

const gooseFilter = birds => {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird));
};
