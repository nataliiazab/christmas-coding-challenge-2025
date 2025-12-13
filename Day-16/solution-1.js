// Maximum depth of binary tree - Recursive DFS solution

// Definition for a binary tree node (LeetCode provides this, but we define it for testing):
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  if (root === null) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return 1 + Math.max(leftDepth, rightDepth);
}

// Example usage:
// Build the tree: [3,9,20,null,null,15,7]
const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(root)); // Output: 3

// For an empty tree:
// console.log(maxDepth(null)); // Output: 0

//Step by step explanation:

// Step 1: Base Case
// - If the current node (root) is null, return 0 (the depth of an empty tree).
// Step 2: Recursive Case
// - Recursively calculate the depth of the left subtree: leftDepth = maxDepth(root.left).
// - Recursively calculate the depth of the right subtree: rightDepth = maxDepth(root.right).
// Step 3: Combine Results
// - The maximum depth at the current node is 1 (for the current node) plus the maximum of the depths of the left and right subtrees: return 1 + Math.max(leftDepth, rightDepth).
