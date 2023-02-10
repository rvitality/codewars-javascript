// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

// ! Vowel remover ---------------

const shortcut = str => [...str].filter(char => !"aeiou".includes(char)).join("");
