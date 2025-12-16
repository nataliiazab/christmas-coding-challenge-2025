//
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return "";

  const first = strs[0];

  for (let i = 0; i < first.length; i++) {
    const ch = first[i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== ch) {
        return first.slice(0, i);
      }
    }
  }

  return first;
}
// Example usage:
// const solution = new Solution();
// console.log(solution.longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
// console.log(solution.longestCommonPrefix(["dog","racecar","car"])); // Output: ""

// Step-by-step explanation:
// Step 1: Check if the input array is empty. If it is, return an empty string.
// Step 2: Store the first string in the array as a reference for comparison.
// Step 3: Iterate through each character of the first string using an outer loop.
// Step 4: For each character, use an inner loop to compare it with the corresponding character in all other strings.
// Step 5: If a mismatch is found or if the current index exceeds the length of any string, return the substring of the first string up to the current index.
// Step 6: If no mismatches are found after checking all characters, return the entire first string as the longest common prefix.
