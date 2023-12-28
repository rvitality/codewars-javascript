const sumEvenNumbers = (numbers) =>
    numbers.reduce((sum, num) => sum + (num % 2 === 0 ? num : 0), 0);
