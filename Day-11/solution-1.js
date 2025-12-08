// Sliding window approach

const minSubArrayLen = function (target, nums) {
  let sum = 0;
  let left = 0;
  let minLength = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      const windowLength = right - left + 1;

      if (minLength === 0 || windowLength < minLength) {
        minLength = windowLength;
      }

      sum -= nums[left];
      left++;
    }
  }

  return minLength;
};

// Step 1: initialize sum, left pointer, and minLength
// Step 2: iterate with right pointer through the array
// Step 3: add nums[right] to sum to expand the window
// Step 4: while sum is greater than or equal to target:
//            - calculate the current window length
//            - update minLength if it's 0 or the current window length is smaller
//            - subtract nums[left] from sum and move left pointer to the right
// Step 5: return minLength
