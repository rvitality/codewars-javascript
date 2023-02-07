// https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript

// ! Previous multiple of three ---------------

const prevMultOfThree = num => {
    if (num % 3 === 0) return num;

    const strNum = num.toString();

    for (let i = strNum.length - 1; i > 0; i--) {
        const current = +strNum.slice(0, i);

        if (current % 3 === 0) {
            return current;
        }
    }

    return null;
};

console.log(prevMultOfThree(25));
