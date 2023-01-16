// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

// ! Alphabet war ---------------

const alphabetWar = fight => {
    const leftPowers = {
        w: 4,
        p: 3,
        b: 2,
        s: 1,
    };
    const rightPowers = {
        m: 4,
        q: 3,
        d: 2,
        z: 1,
    };

    let leftPoints = 0;
    let rightPoints = 0;

    for (const char of fight) {
        if (leftPowers[char]) {
            leftPoints += leftPowers[char];
        }

        if (rightPowers[char]) {
            rightPoints += rightPowers[char];
        }
    }

    if (leftPoints > rightPoints) {
        return "Left side wins!";
    } else if (leftPoints < rightPoints) {
        return "Right side wins!";
    }
    return "Let's fight again!";
};

console.log(alphabetWar("pwmtpdnq"));
