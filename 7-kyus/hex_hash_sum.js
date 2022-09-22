// https://www.codewars.com/kata/5ab363ff6a176b29880000dd/train/javascript

// ! Hex Hash Sum ---------------

const hexHash = code => {
    const hexValuesStr = [...code].reduce((acc, hex) => acc + hex.charCodeAt().toString(16), "");
    return [...hexValuesStr.replace(/\D/g, "")].reduce((sum, char) => sum + parseInt(char), 0);
};
