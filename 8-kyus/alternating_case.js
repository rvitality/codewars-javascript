// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

// ! altERnaTIng cAsE <=> ALTerNAtiNG CaSe ---------------
String.prototype.toAlternatingCase = function () {
    const words = [...this];
    return words
        .map(letter =>
            letter.toUpperCase() === letter ? letter.toLowerCase() : letter.toUpperCase()
        )
        .join("");
};
