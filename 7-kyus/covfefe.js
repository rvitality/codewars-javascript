// https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/train/javascript

// ! Covfefe ---------------

const covfefe = str =>
    str.includes("coverage")
        ? str
              .split(" ")
              .map(word => (word === "coverage" ? "covfefe" : word))
              .join(" ")
        : str + " covfefe";
