function checkExam(array1, array2) {
    let score = 0;

    for (let i = 0; i < array1.length; i++) {
        const correctAns = array1[i];
        const submittedAns = array2[i];

        if (!submittedAns) {
            continue;
        } else if (correctAns === submittedAns) {
            score += 4;
        } else {
            score--;
        }
    }

    if (score < 0) return 0;

    return score;
}
