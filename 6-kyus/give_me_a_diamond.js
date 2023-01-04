// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

// ! Give me a Diamond ---------------
const diamond = n => {
    if (n < 1 || n % 2 !== 1) return null;
    let upperSide = "";
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            upperSide += "*".repeat(i);

            if (i !== n) upperSide += "\n";
        }
    }

    let pattern = upperSide.split("\n");

    // adding spaces
    const numOfSpaces = Math.floor(n / 2);

    for (let i = numOfSpaces, j = 0; i > 0; i--, j++) {
        pattern[j] = " ".repeat(i) + pattern[j];
    }

    pattern = pattern.join("\n") + "\n" + [...pattern].reverse().slice(1).join("\n");

    // edge case
    if (n > 1) {
        return pattern + "\n";
    }

    return pattern;
};
