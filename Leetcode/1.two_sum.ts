function twoSum(nums: number[], target: number): number[] | null {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {


            const two_sum = nums[i] + nums[j]

            if (nums[i] !== nums[j] && target === two_sum) return [i, j]

        }

    }

    return null
};



function twoSumImproved(nums: number[], target: number): number[] | null {
    const map: { [key: number]: number } = {}; // to store value → index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // If we've seen the complement before, return the indices
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        // Otherwise, save this number and its index
        map[nums[i]] = i;
    }

    return null; // if no pair found
}


console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]
twoSum([3, 2, 4], 6); // [1, 2]
twoSum([3, 3], 6); // [0, 1]