// Basic array manipulation problem, no advanced algorithm 

const buildArray = function (nums) {
  // nums[0] -> 0 -> 0
  // nums[1] -> 2 -> 1
  // nums[2] -> 1 -> 2
  // nums[3] -> 5 -> 4
  // nums[4] -> 3 -> 5
  // nums[5] -> 4 -> 3

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    ans.push(nums[nums[i]]);
  }

  return ans;
};

// Example:
// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]

// 1. Iterate through the numbers in array
// 2. Find the value of num[i]
// 3. use that value as index for new array ans
