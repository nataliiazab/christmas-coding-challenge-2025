// Hash map approach 
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