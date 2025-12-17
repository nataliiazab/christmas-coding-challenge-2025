// dynamic programming approach to solve the climbing stairs problem

const climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }

  let result = 0;
  let previous1 = 3;
  let previous2 = 2;

  for (let i = 3; i < n; i++) {
    result = previous1 + previous2;
    previous2 = previous1;
    previous1 = result;
  }

  return result;
};

// Example usage:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(5)); // Output: 8
// Step-by-step explanation:
// Step 1: Handle base cases
// - If n is less than or equal to 3, return n directly since the number of ways to climb is equal to n for these cases.
// Step 2: Initialize variables
// - count: to store the current number of ways to reach the nth step.
// - prev1: to store the number of ways to reach the (i-1)th step (initialized to 3 for n=3).
// - prev2: to store the number of ways to reach the (i-2)th step (initialized to 2 for n=2).
// Step 3: Iterate from step 4 to n
// - For each step i from 3 to n-1 (0-based index):
// - Calculate the number of ways to reach the current step as the sum of the ways to reach the two previous steps: count = prev1 + prev2.
// - Update prev2 to be prev1 (the number of ways to reach the (i-1)th step).
// - Update prev1 to be count (the number of ways to reach the current step).
// Step 4: Return the result
// - After the loop, count contains the number of distinct ways to climb to the nth step, so return count.
