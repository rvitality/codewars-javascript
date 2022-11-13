// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

// ! Will there be enough space? ---------------

function enough(cap, on, wait) {
    if (on + wait <= cap) return 0;

    return on + wait - cap;
}
