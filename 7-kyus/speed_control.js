// https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript

// ! Convert an array of strings to array of numbers ---------------
const gps = (seconds, records) => {
    if (records.length <= 1) return 0;
    const hourlySpeeds = [];

    for (let i = 1; i < records.length; i++) {
        const prev = records[i - 1] || 0;
        const curr = records[i];

        const deltaDistance = curr - prev;

        const hourlySpeed = (3600 * deltaDistance) / seconds;
        hourlySpeeds.push(hourlySpeed);
    }

    return Math.max(...hourlySpeeds);
};

gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]);
