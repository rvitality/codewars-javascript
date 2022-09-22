// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// ! Credit Card Mask ---------------

const maskify = cc =>
    cc && cc.length > 4 ? "#".repeat(cc.slice(0, cc.length - 4).length) + cc.slice(-4) : cc;
