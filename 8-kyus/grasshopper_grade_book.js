// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

// ! Grasshopper - Grade book ---------------

function getGrade(s1, s2, s3) {
    const avrg = (s1 + s2 + s3) / 3;

    if (avrg >= 90 && avrg <= 100) {
        return "A";
    }

    if (avrg >= 80 && avrg < 90) {
        return "B";
    }

    if (avrg >= 70 && avrg < 80) {
        return "C";
    }

    if (avrg >= 60 && avrg < 70) {
        return "D";
    }

    if (avrg < 60) return "F";
}
