// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

// ! 1.  A wolf in sheep's clothing ---------------
const warnTheSheep = queue => {
    const reversedQueue = queue.reverse();
    const wolfsPosition = reversedQueue.findIndex(animal => animal === "wolf");

    return wolfsPosition === 0
        ? "Pls go away and stop eating my sheep"
        : `Oi! Sheep number ${wolfsPosition}! You are about to be eaten by a wolf!`;
};

// console.log(
//     warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])
// );
// "Oi! Sheep number 2! You are about to be eaten by a wolf!"

// console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
// "Oi! Sheep number 5! You are about to be eaten by a wolf!"

// console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
// "Oi! Sheep number 6! You are about to be eaten by a wolf!"

// ! solutions
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/solutions/javascript
