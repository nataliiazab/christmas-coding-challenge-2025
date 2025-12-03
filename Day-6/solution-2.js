// Binary search approach to find the index of a target value in a sorted array by repeatedly dividing the search interval in half.


const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

search([1, 2, 3, 4, 5, 6, 7], 5); // 4

// Step 1: Initialize two pointers, left and right, to the start and end of the array respectively.
// Step 2: While left is less than or equal to right, do the following:
// Step 3: Calculate the mid index as the average of left and right.
// Step 4: If the element at mid is equal to the target, return mid.
// Step 5: If the element at mid is less than the target, move the left pointer to mid + 1.
// Step 6: If the element at mid is greater than the target, move the right pointer to mid - 1.
// Step 7: If the target is not found, return -1.
