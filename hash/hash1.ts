class HNode {
    value: number
    next: Linkedlist | null
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    head: HNode | null
    length: number
    constructor() {
        this.head = null
        this.length = 0
    }
}


class HashMap {
    table: Linkedlist[]; // Array of linked lists to handle collisions
    size: number;       // Number of buckets in the hash map    
    constructor(parameters) {

    }
}