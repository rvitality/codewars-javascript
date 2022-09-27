// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

// ! Remove the minimum ---------------

const removeSmallest = numbers => {
    let min = numbers[0];
    let indexTrack = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
            indexTrack = i;
        }
    }

    const numbersCopy = [...numbers];
    numbersCopy[indexTrack] = null;

    return numbersCopy.filter(Number);
};

// ! review
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/solutions/javascript
