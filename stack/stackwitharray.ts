class StackWithArray {
    private stack: number[];

    constructor() {
        this.stack = [];
    }

    push(item: number) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) return "The stack is empty"
        return this.stack.pop();
    }

    peek(): number | undefined {
        return this.stack[this.stack.length - 1];
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    size(): number {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }
}

let stack = new StackWithArray()

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print()

stack.pop();
stack.print();


console.log("My stack peek:", stack.peek());

console.log(
    "Stack size:", stack.size()
);


console.log("Is stack empty?", stack.isEmpty());
stack.push(5);
stack.print();