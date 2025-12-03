//linear search approach

const search = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target) {
            return i
    }}

    return(-1)
};


// Step 1: Iterate through each element in the array using a for loop.
// Step 2: For each element, check if it is equal to the target value.
// Step 3: If a match is found, return the index of that element.
// Step 4: If the loop completes without finding a match, return -1 to indicate that the target is not present in the array.
