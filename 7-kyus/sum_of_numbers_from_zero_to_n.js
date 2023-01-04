// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript

// ! Sum of numbers from 0 to N ---------------

const SequenceSum = (function () {
    function SequenceSum() {}

    SequenceSum.showSequence = function (count) {
        if (count === 0) return `0=0`;
        if (count < 0) return `${count}<0`;

        let sum = 0;
        let sequence = "";
        for (let i = 0; i <= count; i++) {
            sum += i;
            sequence += `${i}+`;
        }

        return `${sequence.slice(0, -1)} = ${sum}`;
    };

    return SequenceSum;
})();
