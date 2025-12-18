// Horizontal scanning approach


const longestCommonPrefix = function(strs) {
     if (strs.length === 0) {
        return ""
    }

    let result = [];

    for (let i = 0; i < strs[0].length; i++){
        let currentChar = strs[0].charAt(i);
        for (let j = 1; j < strs.length; j++){
        if (strs[j].charAt(i) !== currentChar){
            return result.join("");
        } 
    }
    result.push(currentChar) }

    return result.join("");
};

//Steps:

// Step 1: Handle edge case
// - If the input array is empty, return an empty string as there are no strings to compare.
// Step 2: Initialize result storage
// - Create an empty array (result) to store the common prefix characters.
// Step 3: Iterate through characters of the first string
// - For each character in the first string (strs[0]):
// - Store the current character in a variable (currentChar).
// Step 4: Compare with other strings
// - For each of the other strings in the array:
// - If the character at the current index does not match currentChar:
// - Return the joined result array as a string, since the common prefix ends here.
// Step 5: Append matching character
// - If all strings have the same character at the current index, append currentChar to the result array.
// Step 6: Return the final result
// - After iterating through all characters of the first string, return the joined result array as a string, which represents the longest common prefix.

