function uncensor(infected, discovered) {
    let counter = 0;

    let res = infected.split("");

    for (let i = 0; i < infected.length; i++) {
        const char = infected[i];
        if (char === "*") {
            res[i] = discovered[counter];
            counter++;
        }
    }

    return res.join("");
}
