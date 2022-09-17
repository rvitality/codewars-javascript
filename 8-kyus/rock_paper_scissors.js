// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

// ! Rock Paper Scissors! ---------------
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";

    const winningCombinations = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock",
    };

    if (winningCombinations[p1] === p2) return "Player 1 won!";

    return "Player 2 won!";
};

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";

//     if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
//     if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
//     if (p1 === "paper" && p2 === "rock") return "Player 1 won!";

//     return "Player 2 won!";
// };
