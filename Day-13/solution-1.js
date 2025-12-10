// The solution uses binary search approach 

const guessNumber = function(n) {
let left = 1;
let right = n;


  while (left <= right){
    let middle = left+Math.floor((right-left)/2)
    const res = guess(middle);
    if (res === 0){
        return middle
    } else if (res ===1 ) {
        left = middle + 1
    } else if (res === -1){
        right = middle - 1
    }
  }
};

// Step 1: Initialize left and right pointers to define the search range
// Step 2: Use a while loop to continue searching while left is less than or equal to right
// Step 3: Calculate the middle point of the current range by averaging left and right pointers. Middle is calculated as left plus half the distance to right to avoid potential overflow
// Step 4: Call the guess API with the middle point to check if it's correct
// Step 5: If the guess is correct (0), return the middle point
// Step 6: If the guess is too low (1), adjust the left pointer to middle + 1
// Step 7: If the guess is too high (-1), adjust the right pointer to middle - 1
// Step 8: Repeat until the correct number is found

