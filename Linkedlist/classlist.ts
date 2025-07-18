// Define a class for a node in the linked list
class ListNode {
    value: number;           // The value stored in this node
    next: ListNode | null;   // Reference to the next node (or null if none)

    constructor(value: number) {
        this.value = value;  // Set the value of the node
        this.next = null;    // By default, the next node is null
    }
}

// Define a class for the singly linked list
class SinglyLinkedList {
    head: ListNode | null;   // The first node in the list
    tail: ListNode | null;   // The last node in the list
    length: number = 0;      // Number of nodes in the list

    // Constructor initializes the head and tail of the list
    constructor(head: ListNode | null = null, tail: ListNode | null = null) {
        this.head = head;    // Set the head node
        this.tail = tail;    // Set the tail node
        this.length = 1;     // Start with length 1 (even if head/tail are null)
    }

    // Method to add a new value to the end of the list
    append(value: number): void {
        const newNode = new ListNode(value); // Create a new node with the given value

        if (this.head === null) {            // If the list is empty
            this.head = newNode;             // Set head to the new node
            this.tail = newNode;             // Set tail to the new node
        } else {
            if (this.tail) this.tail.next = newNode; // Link the current tail to the new node
            this.tail = newNode;                      // Update the tail to the new node
        }

        this.length++;                        // Increase the length of the list by 1
    }


    transverse() {
        let currentNode = this.head; // Start from the head of the list
        while(currentNode?.next != null){
            currentNode = currentNode.next

            if(currentNode.next === null) {
                return currentNode.value;
            }
        } 
        
    }
}