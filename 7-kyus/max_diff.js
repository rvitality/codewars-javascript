// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

// ! max diff - easy ---------------

const maxDiff = list => (list.length > 0 ? Math.max(...list) - Math.min(...list) : 0);
