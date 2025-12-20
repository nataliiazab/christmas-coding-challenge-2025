// recursive depth-first search (DFS)


var minDepth = function(root) {
    if (root === null) return 0;
    if (root.left === null) return 1 + minDepth(root.right);
    if (root.right === null) return 1 + minDepth(root.left);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

//Steps:
// Step 1: Base Case
// - If the current node (root) is null, return 0 (the depth of an empty tree).
// Step 2: Single Child Cases
// - If the left child is null, return 1 plus the depth of the right subtree.
// - If the right child is null, return 1 plus the depth of the left subtree.
// Step 3: Both Children Present
// - If both children are present, return 1 plus the minimum of the depths of the left and right subtrees.
