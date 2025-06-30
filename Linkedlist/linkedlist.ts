class LNode {
    value: number;
    next: LNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    head: LNode | null;

    constructor() {
        this.head = null;
    }

    add(value: number) {
        const newNode = new LNode(value);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let currentNode = this.head
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }

    }


    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + (current.next ? ' → ' : '');
            current = current.next;
        }
        console.log(result);
    }

    // Add value to the beginning of the list
    prepend(value: number) {
    }

    // Get value at a specific index
    get(index: number) {
    }

    // Return the number of nodes
    size() {
    }

    // Check if the list is empty
    isEmpty() {
    }

    // Return all values as an array
    toArray() {
    }

    // Insert value at a specific index
    insertAt(index: number, value: number) {
    }

    // Insert a value after a node with targetValue
    insertAfter(targetValue: number, newValue: number) {
    }

    // Find node with a specific value
    find(value: number) {
    }

    // Check if a value exists in the list
    contains(value: number) {
    }

    // Remove the first node
    removeFirst() {
    }

    // Remove the last node
    removeLast() {
    }

    // Remove node at a specific index
    removeAt(index: number) {
    }

    // Remove the first node with a specific value
    remove(value: number) {
    }

    // Reverse the entire list
    reverse() {
    }

    // Clear all nodes from the list
    clear() {
    }

    // Detect if the list has a cycle/loop
    hasCycle() {
    }

    // Return the middle node
    getMiddle() {
    }

    // Return the nth node from the end
    nthFromEnd(n: number) {
    }


}

const list = new LinkedList();
list.add(20)
list.add(50)
list.add(30)
list.add(90)
// console.log(list); // Output: 10
list.print()