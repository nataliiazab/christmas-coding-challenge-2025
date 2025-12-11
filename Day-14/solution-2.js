// Approach: Using built-in string methods

const strStr = function (haystack, needle) {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

// Step 1: Check if the needle is present in the haystack using the includes() method.
// Step 2: If the needle is found, use the indexOf() method to get the index of its first occurrence and return that index.
// Step 3: If the needle is not found, return -1.
