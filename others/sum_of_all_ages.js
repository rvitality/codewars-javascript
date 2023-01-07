const profile = {
    name: "peter",
    age: 56,
    kids: [
        {
            name: "jill",
            age: 23,
            kids: [
                {
                    name: "jeter",
                    age: 1,
                },
                {
                    name: "bill",
                    age: 2,
                },
            ],
        },
    ],
};

let totalAges = 0;
const computeTotalAges = obj => {
    for (key in obj) {
        const current = obj[key];

        if (key === "age") {
            totalAges += current;
        }

        if (key === "kids") {
            const kids = current;

            kids.forEach(kid => {
                computeTotalAges(kid);
            });
        }
    }

    return totalAges;
};
