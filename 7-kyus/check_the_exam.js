// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

// Note: The two arrays are not empty and are the same length.

// ! Check the exam ---------------
const checkExam = (arr1, arr2) => {
    let score = 0;

    for (let i = 0; i < arr1.length; i++) {
        const correctAns = arr1[i];
        const studentAns = arr2[i];

        if (correctAns && studentAns) {
            if (correctAns === studentAns) {
                score += 4;
            } else if (correctAns !== studentAns) {
                score -= 1;
            }
        }
    }

    if (score < 0) return 0;

    return score;
};
