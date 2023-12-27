function solution(digits) {
    let biggestNum = 0;

    for (let i = 0; i <= digits.length - 5; i++) {
        const nextNum = parseInt(digits.slice(i, i + 5));

        if (nextNum > biggestNum) {
            biggestNum = nextNum;
        }
    }

    return biggestNum;
}

console.log(solution("123456789"));
