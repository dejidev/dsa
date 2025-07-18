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
    length: number

    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value: number) {
        // Create a new node with the value
        const newNode = new LNode(value);
        // If the list is empty, set head and tail to new node
        if (this.head === null) {
            this.head = newNode;
        } else {  // Else, set tail.next to new node and update tail to new node
            let current = this.head
            // Traverse to the end of the list
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode
            this.length++
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
        // Create a new node with the value
        const newNode = new LNode(value);
        // If list is empty, set head and tail to new node
        if (this.head === null) {
            this.head = newNode
        } else {        // Else, set newNode.next to head, then update head to newNode
            newNode.next = this.head
            this.head = newNode
            this.length++
        }
    }


    insert(index: number, value: number) {
        // If index is 0, use prepend
        if (index === 0) {
            return this.prepend(value)
        }
        // If index is length, use append
        if (index === this.length || index > this.length) {
            return this.append(value)
        }
        const newNode = new LNode(value)
        //  - Loop to the node before the index
        let current = this.head;
        if (current) {

            for (let i = 0; i < index - 1; i++) {
                current = current?.next as LNode | null; 
            }
            newNode.next = current?.next as LNode | null
            current!.next = newNode as LNode | null
            this.length++
            return newNode
        }

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
list.append(20)
list.append(30)
list.append(90)
list.insert(0, 100)

// list.prepend(10)
// console.log(list); // Output: 10
list.print()