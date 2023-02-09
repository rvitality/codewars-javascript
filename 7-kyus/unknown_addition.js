// https://www.codewars.com/kata/5716955a794d3013d00013f9/train/javascript

// ! The unknown but known variables: Addition ---------------

const theVar = theVariables => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    const [firstLetter, secondLetter] = theVariables.split("+");

    const firstIndex = alphabet.indexOf(firstLetter) + 1;
    const secondIndex = alphabet.indexOf(secondLetter) + 1;

    return firstIndex + secondIndex;
};
