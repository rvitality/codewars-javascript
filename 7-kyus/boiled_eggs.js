// https://www.codewars.com/kata/52b5247074ea613a09000164/train/javascript

// ! Boiled Eggs ---------------

const cookingTime = eggsCount => {
    let time = 0;
    let notBoiledEgss = eggsCount;

    while (notBoiledEgss > 0) {
        notBoiledEgss -= 8;
        time += 5;
    }

    return time;

    // return Math.ceil(eggs/8) * 5;
};

cookingTime(10);

// 8 eggs at a time
// 5 minutes to boil an egg

// 8 eggs every 5 minutes

// return time (minutes)
