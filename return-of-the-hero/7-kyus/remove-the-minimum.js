function removeSmallest(numbers) {
    let minNumIndex = null;

    return numbers
        .map((num, index) => {
            if (num === Math.min(...numbers) && minNumIndex === null) {
                minNumIndex = index;

                return null;
            }

            return num;
        })
        .filter(Number);
}
