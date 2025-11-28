// Hash Map Approach to solve the Contains Duplicate problem.
// Time Complexity: O(n) — we scan the array once, and each lookup in a hash map is O(1).
// Space Complexity: O(n) — in the worst case, all numbers are unique and stored in the map.

const containsDuplicate = function(nums) {

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return true;
    }
    map[nums[i]] = true;  
  }

  return false;
};


  // Step 1: Create a hash map to remember numbers we've already seen
  // Step 2: Loop through the array
  // Step 3: Check if the current number already exists in the map. If it does, we found a duplicate
  // Step 3: Otherwise, store the number in the map
  // Step 4: If we finish the loop without finding duplicates, return false