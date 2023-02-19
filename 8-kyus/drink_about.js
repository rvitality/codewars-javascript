// https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript

// ! Drink about ---------------

const peopleWithAgeDrink = age => {
    let drink = "whisky";

    if (age < 14) {
        drink = "toddy";
    } else if (age < 18) {
        drink = "coke";
    } else if (age < 21) {
        drink = "beer";
    }

    return `drink ${drink}`;
};
