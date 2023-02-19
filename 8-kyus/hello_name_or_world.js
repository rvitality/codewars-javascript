// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

// ! Hello, Name or World! ---------------

const hello = name => {
    if (!name) return "Hello, World!";

    return `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
};
