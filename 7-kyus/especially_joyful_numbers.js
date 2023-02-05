// https://www.codewars.com/kata/570523c146edc287a50014b1/train/javascript

// ! Especially Joyful Numbers ---------------

const numberJoy = n => {
    const digitSum = [...n.toString()].reduce((sum, num) => sum + +num, 0);
    const reversedDigitSum = +[...digitSum.toString()].reverse().join("");

    return digitSum * reversedDigitSum === n;
};

console.log(numberJoy(1729));
