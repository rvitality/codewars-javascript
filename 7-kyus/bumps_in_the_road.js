// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

// ! Bumps in the Road ---------------

const bump = road => ([...road].filter(el => el === "n").length > 15 ? "Car Dead" : "Woohoo!");
