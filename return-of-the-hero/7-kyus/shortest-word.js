const findShort = (words) =>
    Math.min(...words.split(" ").map((word) => word.length));
