
//  *Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function inorderTraversal(root: TreeNode | null): number[] {
    //If root is null, return empty
    if (root = null) {
        return []
    }
    // Recursively traverse the left subtree
    const left = inorderTraversal(root.left)
    console.log("Left", left);
    

    // Visit the current node (root)
    const current_root = inorderTraversal[root]

    // Recursively traverse the right subtree
    const right = inorderTraversal(root.right)

    // Combine left, current, and right for inorder traversal
    return [...left, ...current_root, ...right]

};