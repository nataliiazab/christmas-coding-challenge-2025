// Sliding Window Approach
// This solution uses the sliding window technique to find the maximum average of any contiguous subarray of length k.
const findMaxAverage = function(nums, k) {
    let windowSum = 0;


    for (let i = 0 ; i < k; i ++) {
        windowSum += nums[i];
        }

    let maxSum = windowSum;
    
    for (let i = k; i < nums.length; i ++){
        windowSum += nums[i] - nums[i-k]
        maxSum = Math.max(maxSum, windowSum);
        }
    

    return maxSum / k 
};


  // Step 1: Initialize windowSum to 0 which will store the sum of the current window
  // Step 2: Calculate the sum of the first k elements and store it in windowSum. It adds the first k elements using a for loop that runs from 0 to k-1
  // Step 3: Initialize maxSum to windowSum to keep track of the maximum sum found
  // Step 4: Iterate from index k to the end of the array by using a for loop where i starts from k and goes to nums.length
  // Step 5: For each iteration, update windowSum by adding the current element and subtracting the element that is left out of the window (nums[i-k])
  // Step 6: Update maxSum to be the maximum of maxSum and the current windowSum
  // Step 7: After the loop, return the maximum average by dividing maxSum by k