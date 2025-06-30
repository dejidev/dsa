class CNode {
    value: any;
    next: CNode | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    head: CNode | null = null;

    add(value: any) {
        const newNode = new CNode(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // point to itself
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next!;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    print(limit = 10) {
        if (!this.head) return;

        let current = this.head;
        let count = 0;
        let values = "";

        while (count < limit) {
            values += current.value + " → ";
            current = current.next!;
            count++;
        }
        console.log(values + "... (loops back)");
    }
}
