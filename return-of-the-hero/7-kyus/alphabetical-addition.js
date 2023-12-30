function addLetters(...letters) {
    if (!letters || letters.length === 0) return "z";

    // 96 being the number before 'a' which is 97

    const sum =
        letters.reduce((sum, letter) => sum + (letter.charCodeAt() - 96), 0) +
        96;

    const letterNum = sum > 122 ? sum - 122 + 96 : sum;

    return String.fromCharCode(letterNum);
}

// addLetters("y", "c", "b");
addLetters("z", "a");
