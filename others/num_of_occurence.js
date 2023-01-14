// check how many times a value occured in a string

// const countNumOccurence = (str, val) => str.split(val).length - 1;
const countNumOccurence = (str, val) => [...str].filter(el => el === val).length;

console.log(countNumOccurence("52134131312", "1"));
console.log(countNumOccurence("bcqedfhrywxcvz", "a"));
