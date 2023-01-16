// https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

// ! esreveR ---------------

reverse = array => {
    const reversedArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArr.push(array[i]);
    }

    return reversedArr;
};
