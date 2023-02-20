// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

// ! Triple Trouble ---------------

const tripleTrouble = (one, two, three) =>
    [...one].reduce((acc, char, index) => acc + char + two[index] + three[index], "");

tripleTrouble("aa", "bb", "cc");
