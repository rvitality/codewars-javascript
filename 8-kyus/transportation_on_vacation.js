// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

// ! Transportation on vacation  ---------------
const rentalCarCost = days => {
    let total = days * 40;

    if (days >= 7) {
        total -= 50;
    } else if (days >= 3) {
        total -= 20;
    }

    return total;

    // fancy one-liner that's hard to read
    // return (days >= 7 ? days * 40 - 50 : days >= 3 ? days * 40 - 20 : days * 40);
};
