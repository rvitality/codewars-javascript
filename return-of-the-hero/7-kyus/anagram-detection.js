const isAnagram = (test, original) => {
    return (
        [...test.toLowerCase()].sort().join("") ===
        [...original.toLowerCase()].sort().join("")
    );
};

isAnagram("foefet", "toffee");
