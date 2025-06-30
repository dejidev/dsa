class StackNode<T> {
    value: T;
    next: StackNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}


class Stack<T> {
    private top: StackNode<T> | null;
    private bottom: StackNode<T> | null;
    private length: number;
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    push(value: T) {
        const newNode = new StackNode(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++
        } else {
            newNode.next = this.top;
            this.top = newNode;
            this.length++
        }
    }


    peek() {
        if (this.isEmpty()) return "The stack is emppty";
        console.log(`The top value is: ${this.top?.value}`);
        return this.top?.value;
    }

    pop() {
        if (this.isEmpty()) return "The stack is Empty";
        const poppedNode = this.top;
        this.top = this.top?.next || null;
        this.length--;
        if (this.isEmpty()) {
            this.bottom = null;
            return "The stack is now empty";
        }
        return poppedNode
    }
}


let lstack = new Stack<number>();

lstack.push(1);
lstack.push(2);
lstack.push(3);




console.log("Before pop", lstack);


console.log("Popped value:", lstack.pop());
// lstack.pop()

console.log("After pop", lstack);
