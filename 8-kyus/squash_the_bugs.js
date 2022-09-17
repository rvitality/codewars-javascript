// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

function findLongest(str) {
    var spl = str.split(" ");
    var longest = 0;

    for (var i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length;
        }
    }

    return longest;
}
