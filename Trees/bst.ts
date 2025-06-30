class BSTNode {
    val: number
    left: BSTNode | null
    right: BSTNode | null
    constructor(val: number, left: BSTNode | null = null, right: BSTNode | null = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}


class BST {
    root: BSTNode | null
    constructor(root: BSTNode) {
        this.root = root
    }

    addNode(val: number): void {
        let head = this.root

        if (head == null) return null
        const newNode = new BSTNode(val)
        while (head) {
            
        }

    }

    search(val: number) {
        let head = this.root

        if (head == null) return null
        
        while (head) {
            if ((val>head.val)) {
                
            }
        }

        while (head) {
            if (val === head.val) {
                return true
            } else if (val < head.val) {
                head = head.left
            } else {
                head = head.right
            }
        }
    }
}