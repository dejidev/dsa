class QueueNode {
    value: number;
    next: QueueNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    private first: QueueNode | null;
    private last: QueueNode | null;
    private length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }


    isEmpty(): boolean {
        return this.length === 0;
    }

    enqueue(value: number) {
        let newNode = new QueueNode(value);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
            this.length++;
        } else {
            this.last!.next = newNode;
            this.last = newNode;
            this.length++;
        }
    }


    dequeue(){
        if(this.isEmpty()){
            return "The queue is empty"
        }else{
            const dequeuedNode = this.first;
            this.first = this.first!.next;
            this.length--;
            if(this.isEmpty()) return "The queue is now empty"
            return dequeuedNode
        }
    }


    peek() {
        if (this.isEmpty()) {
            return " The queue is empty";
        }
        return this.last?.value
    }
}


const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);


console.log("Checking if queue is empty:", queue.isEmpty());


console.log("After Enqueu", queue);


queue.dequeue()
console.log("Peek at the last value:", queue.peek());

console.log("After dequeue", queue);
