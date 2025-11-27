// Brute Force Approach to solve the Two Sum problem. It has a time complexity of O(n^2) due to the nested loops. It checks all possible pairs of numbers to find the two that add up to the target.


const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};


// Step 1: Iterate over the numbers in the array - let i be the current index
// Step 2: For each number, iterate over the rest of the numbers in the array- let j be the index after i
// Step 3: Check if the current two numbers add up to the target - if (nums[i] + nums[j] === target)
// Step 4: If so, return the array [i, j] containing the indices of the two numbers