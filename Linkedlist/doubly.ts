class DNode {
    value: any;
    next: DNode | null;
    prev: DNode | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: DNode | null = null;

    add(value: any) {
        const newNode = new DNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) current = current.next;
            current.next = newNode;
            newNode.prev = current;
        }
    }

    printForward() {
        let current = this.head;
        let values = "";
        while (current) {
            values += current.value + " ⇄ ";
            current = current.next;
        }
        console.log(values + "null");
    }
}
