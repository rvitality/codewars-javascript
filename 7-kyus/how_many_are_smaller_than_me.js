// https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript

// ! How many are smaller than me? ---------------

const smaller = nums => {
    const res = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];

        for (let j = i; j < nums.length; j++) {
            const y = nums[j];

            if (y < x) {
                res[i]++;
            }
        }
    }
    return res;
};

smaller([5, 4, 3, 2, 1]);
