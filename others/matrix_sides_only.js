const countSides = matrix => {
    const rows = matrix.length;
    const columns = matrix[0].length;

    let sum = 0;

    for (let i = 0; i < columns; i++) {
        // iterate over first row
        sum += matrix[0][i];

        // iterate over last row
        sum += matrix[rows - 1][i];
    }

    for (let i = 1; i < rows - 1; i++) {
        // iterate over first column
        sum += matrix[i][0];

        // iterate over last column
        sum += matrix[i][columns - 1];
    }
};

const matrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
];

countSides(matrix);
