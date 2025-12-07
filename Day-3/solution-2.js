// Two pointer approach

const isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  const regex = /[a-z0-9]/i;

  while (left < right) {
    while (left < right && !regex.test(s[left])) {
      left++;
    }

    while (left < right && !regex.test(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// Step 1: Initialise two pointers, left at the start and right at the end of the string
// Step 2: Use a regex to identify alphanumeric characters and ignore others
// Step 3: While left pointer is less than right pointer, do the following:
//   - Move the left pointer to the right until it points to an alphanumeric character
//   - Move the right pointer to the left until it points to an alphanumeric character
//Step 4: Compare the characters at the left and right pointers (case-insensitive)
//   - If they are not the same, return false and exit the function
//   - If they are the same, move both pointers inward (left++, right--)
// Step 5: If the entire string has been checked and all characters matched, return true, otherwise the function would have already returned false
