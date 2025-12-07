// Hash map approach

const twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
};

// Step 1: Create an empty object to store numbers and their indices
// Step 2: Iterate over the numbers in the array - let i be the current index
// Step 3: For each number, calculate its complement (target - nums[i])
// Step 4: Check if the complement exists in the object - if (map[complement] !== undefined)
// Step 5: If so, return the array [map[complement], i] containing the indices of the two numbers
// Step 6: If not, store the current number and its index in the object - map[nums[i]] = i
