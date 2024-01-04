function warnTheSheep(queue) {
    queue = queue.reverse();

    if (queue[0] === "wolf") {
        return "Pls go away and stop eating my sheep";
    }

    const wolfPosition = queue.findIndex((animal) => animal === "wolf");

    return `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`;
}
