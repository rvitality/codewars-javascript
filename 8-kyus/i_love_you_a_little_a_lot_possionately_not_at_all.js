// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/python

// ! I love you, a little , a lot, passionately ... not at all --------------
const howMuchILoveYou = petalsCount => {
    const messages = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    return messages[(petalsCount - 1) % 6];
};
