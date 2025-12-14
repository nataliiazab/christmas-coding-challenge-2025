// Binary Tree Level Order Traversal - BFS Solution

// Definition for a binary tree node (LeetCode provides this, but we define it for testing):
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
if (root === null){
    return []
}

let queue = [root];
let result = [];

while (queue.length > 0) {
    let level = [];
    let size = queue.length;
    for (let i = 0; i<size; i++ ){
        let node = queue.shift();
        level.push(node.val);
        if(node.left){
           queue.push(node.left) 
        };
        if (node.right){
        queue.push(node.right) 
        };
    }
 result.push(level);
}
return result;
};

// Example usage:
// Build the tree: [3,9,20,null,null,15,7]
const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(levelOrder(root)); // Output: [[3],[9,20],[15,7]]

//Step by step explanation:
// Step 1: Handle edge case
// - If the root is null, return an empty array as there are no levels to traverse.
// Step 2: Initialize data structures
// - Create a queue and enqueue the root node.
// - Create a result array to store the level order traversal.
// Step 3: Traverse the tree level by level 
// - While the queue is not empty:
// - Determine the number of nodes at the current level (size = queue.length).
// - Initialize an empty array (level) to store the values of nodes at the current level.
// - For each node at the current level:
// - Dequeue a node from the front of the queue.
// - Add its value to the level array.
// - If the node has a left child, enqueue it.
// - If the node has a right child, enqueue it.
// - After processing all nodes at the current level, add the level array to the result array.
// Step 4: Return the result
// - After traversing all levels, return the result array containing the level order traversal of the tree.

