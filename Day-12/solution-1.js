// Min Stack Implementation - Two Stack Approach

class MinStack {
  constructor() {
    this.stack = []; // Main stack for elements
    this.minStack = []; // Stack to track minimums
  }

  push(val) {
    this.stack.push(val);
    // Push the minimum of val and the current min (or val if minStack is empty)
    const currentMin =
      this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : val;
    this.minStack.push(Math.min(val, currentMin));
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Step 1:  Initialize two stacks: one for all elements and another for tracking minimums
// Step 2: In push(val), add val to the main stack and update the minStack with the minimum value
// Step 3: In pop(), remove the top elements from both stacks
// Step 4: In top(), return the top element of the main stack
// Step 5: In getMin(), return the top element of the minStack which is the current minimum
