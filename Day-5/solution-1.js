// stack data structure approach

const isValid = function (s) {
  const stack = [];

  const mappedBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (mappedBrackets[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (mappedBrackets[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// isValid("()[]{}"); // true

// Step 1: Initialize an empty stack to keep track of opening brackets.
// Step 2: Create a mapping of opening brackets to their corresponding closing brackets.
// Step 3: Iterate through each character in the input string.
// Step 4: If the character is an opening bracket, push it onto the stack.
// Step 5: If the character is a closing bracket, pop the top element from the stack and check if it matches the corresponding opening bracket using the mapping.
// Step 6: If there is a mismatch or if the stack is empty when trying to pop, return false.
// Step 7: After processing all characters, check if the stack is empty. If it is, return true; otherwise, return false.
