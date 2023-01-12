// https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript

// ! How Many Unique Consonants? ---------------

const countConsonants = str =>
    [
        ...new Set(
            [...str.toLowerCase()].filter(
                char =>
                    char.charCodeAt(0) >= 98 && char.charCodeAt(0) <= 122 && !"aeiou".includes(char)
            )
        ),
    ].length;
