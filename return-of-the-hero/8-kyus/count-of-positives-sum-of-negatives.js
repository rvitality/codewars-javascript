// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// ! Count of positives / sum of negatives --------------

const countPositivesSumNegatives = (input) => {
    if (!input || !input.length) return [];

    let positivesCount = 0;
    let negativesSum = 0;

    input.forEach((num) => {
        if (num > 0) {
            positivesCount++;
        } else {
            negativesSum += num;
        }
    });

    return [positivesCount, negativesSum];
};
