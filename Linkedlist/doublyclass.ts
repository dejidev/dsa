class DoublyLinkedlistNode {
    value: number;
    next: DoublyLinkedlistNode | null;
    prev: DoublyLinkedlistNode | null;
    constructor(value: number) {
        this.value = value; // Set the value of the node
        this.next = null;   // By default, the next node is null
        this.prev = null;  // By default, the previous node is null
    }
}


class DoublyLinkedList {
    head: DoublyLinkedlistNode | null; // The first node in the list
    tail: DoublyLinkedlistNode | null; // The last node in the list
    length: number; // Number of nodes in the list
    constructor(value: number) {
        this.head = new DoublyLinkedlistNode(value); // Initialize head with a new node
        this.tail = this.head;
        this.length = 1;
    }


    append(value: number) {
        const newNode = new DoublyLinkedlistNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.prev = null
        }
        else {
            if (this.tail) {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }

        this.length++
    }


    transverse(index: number) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            if (currentNode === null) {
                return null;
            }
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }


    //removeAt(index: number) 
    remove(index: number) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        const nodeToRemove = this.transverse(index);
        if (nodeToRemove === null) {
            return null
        }
        if (nodeToRemove.prev) {
            nodeToRemove.prev.next = nodeToRemove.next;
            if (nodeToRemove.next) {
                nodeToRemove.next.prev = nodeToRemove.prev;
            }
        }

    }


    insertionAtIndex(value: number, index: number) {

    }

    print() {
        let current = this.head; // Start from the head node
        const values: number[] = []; // Array to store node values
        while (current !== null) { // Loop until the end of the list
            values.push(current.value); // Add current node's value to the array
            current = current.next; // Move to the next node
        }
        console.log(values.join(' <-> ')); // Print values joined by arrows
    }
}



let nod = new DoublyLinkedList(1)
// console.log(nod);

nod.append(2);
nod.append(3);

nod.transverse(1)

nod.print()

