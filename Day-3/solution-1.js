//  a straightforward solution which cleans the string and checks if it reads the same forwards and backwards.

const isPalindrome = function(s) {
const convertedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
const finalString = convertedString.split('').join('');
const reversedString = convertedString.split('').reverse().join('');

return finalString === reversedString ? true: false


};

  // Step 1: Convert the string to lowercase and remove non-alphanumeric characters
  // Step 2: Create a new string with only the alphanumeric characters
  // Step 3: Reverse the cleaned string
  // Step 4: Compare the cleaned string with the reversed string
  // Step 5: Return true if they are the same, otherwise return false