// https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript

// ! Isograms ---------------

// const likeOrDislike = buttons => {
//     if (!buttons.length) return "Nothing";

//     let tracker = buttons[0];
//     let res = tracker;

//     for (let i = 1; i < buttons.length; i++) {
//         const current = buttons[i];

//         if (tracker === current && res !== "Nothing") {
//             res = "Nothing";
//         } else {
//             res = current;
//         }

//         tracker = current;
//     }

//     console.log(buttons);

//     return res;
// };

const likeOrDislike = buttons => {
    let state = "Nothing";

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] === state) {
            state = "Nothing";
        } else {
            state = buttons[i];
        }
    }

    return state;
};
