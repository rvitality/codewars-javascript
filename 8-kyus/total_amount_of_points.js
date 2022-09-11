// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

// ! Total amount of point ---------------
const points = games => {
    return games.reduce((sum, point) => {
        const x = point[0];
        const y = point[2];

        if (x > y) {
            return sum + 3;
        } else if (x < y) {
            return sum;
        }
        return sum + 1;
    }, 0);
};
